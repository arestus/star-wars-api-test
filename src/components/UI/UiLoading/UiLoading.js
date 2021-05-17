import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./UiLoading.module.css";

import loaderRed from "./img/loader-red.svg";
import loaderWhite from "./img/loader-white.svg";
import loaderBlue from "./img/loader-blue.svg";
import cn from "classnames";

const UiLoading = ({ theme = "white", isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = useState(null);
  useEffect(() => {
    switch (theme) {
      case "red":
        setLoaderIcon(loaderRed);
        break;
      case "white":
        setLoaderIcon(loaderWhite);
        break;
      case "blue":
        setLoaderIcon(loaderBlue);
        break;

      default:
        setLoaderIcon(loaderRed);
    }
  });

  return (
    <img
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
      src={loaderIcon}
      alt="loader"
    />
  );
};

UiLoading.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  classes: PropTypes.string,
};

export default UiLoading;
