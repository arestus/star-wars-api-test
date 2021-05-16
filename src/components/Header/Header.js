import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/people" exact>
        People
      </NavLink>
    </>
  );
};

export default Header;
