import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Favorite from "@components/Favorite";

const Header = () => {
  return (
    <div className={styles.container}>
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
