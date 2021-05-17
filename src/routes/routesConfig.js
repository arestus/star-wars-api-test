import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage";
import PersonPage from "@containers/PersonPage";

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
  {
    path: "/people/:id",
    exact: true,
    component: PersonPage,
  },
  {
    path: "/not-found",
    exact: true,
    component: NotFoundPage,
  },
  {
    path: "*",
    exact: false,
    component: NotFoundPage,
  },
];

export default routesConfig;
