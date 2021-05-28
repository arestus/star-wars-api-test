import styles from "./ChooseSide.module.css";
import PropTypes from "prop-types";

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from "@context/ThemeProvider";
import imgLightSide from "./img/light-side.jpg";
import imgDarkSide from "./img/dark-side.jpg";
import imgFalcon from "./img/falcon.jpg";

const ChooseSideItem = ({ theme, text, img }) => {
  const isTheme = useTheme();
  return (
    <div className={styles.item} onClick={() => isTheme.change(theme)}>
      <div className={styles.item_header}>{text}</div>
      <img className={styles.item_img} src={img} alt={text} />
    </div>
  );
};

ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light side",
      img: imgLightSide,
    },
    {
      theme: THEME_DARK,
      text: "Dark sid",
      img: imgDarkSide,
    },
    {
      theme: THEME_NEUTRAL,
      text: "I'm Han Solo",
      img: imgFalcon,
    },
  ];

  return (
    <div>
      {elements.map(({ theme, text, img }, index) => {
        <ChooseSideItem key={index} theme={theme} text={text} img={img} />;
      })}
    </div>
  );
};

export default ChooseSide;
