import styles from "./UiInput.module.css";
import cn from "classnames";
import PropTypes from "prop-types";
import "../index.css";
import icon from "./img/cancel.svg";

const UiInput = ({ value, handleInputChange, placeholder, classes }) => (
  <div className={cn(styles.wrapper__input, classes)}>
    <input
      type="text"
      value={value}
      onChange={(e) => handleInputChange(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
    />
    <img
      onClick={() => value && handleInputChange("")}
      src={icon}
      className={cn(styles.clear, !value && styles.clear__disabled)}
      alt="Clear"
    />
  </div>
);

UiInput.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
};

export default UiInput;
