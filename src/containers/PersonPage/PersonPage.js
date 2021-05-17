import { getApiResource } from "@utils/network";
import { useEffect } from "react";
import { API_PERSON } from "@constants/api";
import styles from "./PersonPage.module.css";

const PersonPage = ({ match }) => {
  useEffect(() => {
    (async () => {
      const id = match.params.id;
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      console.log(`${API_PERSON}/${id}/`, res);
    })();
  }, []);

  return (
    <>
      <h1>PersonPage </h1>
    </>
  );
};

export default PersonPage;
