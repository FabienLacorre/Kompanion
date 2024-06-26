import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Page } from "./Components/Page";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import { forOwn } from "lodash";

export enum PageKeyEnum {
  LOGIN = "LOGIN",
  HOME = "HOME",
  MY_KOMPANIONS = "MY_KOMPANIONS",
  MY_APPOINTMENT = "MY_APPOINTMENT",
  MY_STOCKS = "MY_STOCKS",
  MY_REMINDERS = "MY_REMINDERS",
  MY_BUDGET = "MY_BUDGET",
  MY_ACCOUNT = "MY_ACCOUNT",
}

export const pageConfiguration = {
  [PageKeyEnum.LOGIN]: {
    keyEnum: PageKeyEnum.LOGIN,
    path: "/",
    Content: <Login />,
    withNavbar: false,
  },
  [PageKeyEnum.HOME]: {
    keyEnum: PageKeyEnum.HOME,
    path: "/home",
    label: "Acceuil",
    Content: <Dashboard />,
    withNavbar: true,
  },
  [PageKeyEnum.MY_KOMPANIONS]: {
    keyEnum: PageKeyEnum.MY_KOMPANIONS,
    path: "/my-kompanions",
    label: "Mes Kompanions",
    Content: <Dashboard />,
    withNavbar: true,
  },
  [PageKeyEnum.MY_APPOINTMENT]: {
    keyEnum: PageKeyEnum.MY_APPOINTMENT,
    path: "/my-appointment",
    label: "Mes rendez-vous",
    Content: <Dashboard />,
    withNavbar: true,
  },
  [PageKeyEnum.MY_STOCKS]: {
    keyEnum: PageKeyEnum.MY_STOCKS,
    path: "/my-stocks",
    label: "Mes stocks",
    Content: <Dashboard />,
    withNavbar: true,
  },
  [PageKeyEnum.MY_REMINDERS]: {
    keyEnum: PageKeyEnum.MY_REMINDERS,
    path: "/my-reminders",
    label: "Rappels",
    Content: <Dashboard />,
    withNavbar: true,
  },
  [PageKeyEnum.MY_BUDGET]: {
    keyEnum: PageKeyEnum.MY_BUDGET,
    path: "/my-budget",
    label: "Mon budget",
    Content: <Dashboard />,
    withNavbar: true,
  },
  [PageKeyEnum.MY_ACCOUNT]: {
    keyEnum: PageKeyEnum.MY_ACCOUNT,
    path: "/my-account",
    label: "Mon compte",
    Content: <Dashboard />,
    withNavbar: true,
  },
};

const pageRouteList: RouteObject[] = [];

forOwn(pageConfiguration, (value, key) => {
  pageRouteList.push({
    path: value.path,
    element: <Page withNavBar={value.withNavbar} Content={value.Content} />,
  });
});

export const router = createBrowserRouter(pageRouteList);
