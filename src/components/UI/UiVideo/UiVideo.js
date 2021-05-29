import PropTypes from "prop-types";
import styles from "./UiVideo.module.css";

import cn from "classnames";
import { useEffect, useRef } from "react";

const UiVideo = ({ src, classes, playbackRate = 1.0 }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, []);

  return (
    <video
      loop
      autoPlay
      muted
      className={cn(styles.video, classes)}
      ref={videoRef}
    >
      <source src={src} />
    </video>
  );
};

UiVideo.propTypes = {
  src: PropTypes.string,
  classes: PropTypes.string,
  playbackRate: PropTypes.number,
};

export default UiVideo;
