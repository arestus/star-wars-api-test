import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Favorite from "@components/Favorite";
import imgLight from "./img/light.svg";
import imgDark from "./img/dark.svg";
import imgNeutral from "./img/neutral.svg";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from "@context/ThemeProvider";
import { useEffect, useState } from "react";

const Header = () => {
  const [icon, setIcon] = useState(imgNeutral);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLight);
        break;
      case THEME_DARK:
        setIcon(imgDark);
        break;
      case THEME_NEUTRAL:
        setIcon(imgNeutral);
        break;
      default:
        setIcon(imgNeutral);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars" />

      <ul className={styles.list__container}>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1" exact>
            People
          </NavLink>
        </li>
        <li>
          <NavLink to="/not-found" exact>
            Not Found
          </NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
