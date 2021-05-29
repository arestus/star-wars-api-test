import styles from "./ErrorMessage.module.css";
import video from "./video/han-solo.mp4";
import UiVideo from "@ui/UiVideo";

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>Sorry!</p>
      <UiVideo src={video} classes={styles.video} playbackRate={1} />
    </>
  );
};

export default ErrorMessage;
