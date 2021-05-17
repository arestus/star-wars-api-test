import PropTypes from "prop-types";
import { getApiResource } from "@utils/network";
import { getPeopleImage } from "@services/getPeopleData";
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto";

import UiLoading from "@ui/UiLoading";

import PersonLinkBack from "@components/PersonPage/PersonLinkBack";
import React, { useEffect, useState, Suspense } from "react";
import { API_PERSON } from "@constants/api";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import styles from "./PersonPage.module.css";

// import PersonFilms from "@components/PersonPage/PersonFilms";

const PersonFilms = React.lazy(() =>
  import("@components/PersonPage/PersonFilms")
);

const PersonPage = ({ match, setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);

  useEffect(() => {
    (async () => {
      const id = match.params.id;
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Sking Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));

        // console.log("films", res.films);

        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName} </span>
        <div className={styles.container}>
          <PersonPhoto personPhoto={personPhoto} personName={personName} />

          {personInfo && <PersonInfo personInfo={personInfo} />}

          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
  match: PropTypes.object,
};

export default withErrorApi(PersonPage);
