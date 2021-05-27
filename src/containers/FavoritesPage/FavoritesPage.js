import { useSelector } from "react-redux";
import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const storeDate = useSelector((state) => state.favoriteReducer);
  console.log(storeDate);
  return (
    <>
      <h1>FavoritesPage</h1>
    </>
  );
};

export default FavoritesPage;
