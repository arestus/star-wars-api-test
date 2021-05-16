import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";

const routesConfig = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/people",
    exact: true,
    component: PeoplePage,
  },
];

export default routesConfig;
