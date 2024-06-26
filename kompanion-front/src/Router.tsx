import { createBrowserRouter } from "react-router-dom";
import { Page } from "./Components/Page";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import path from "path";

export enum PageKeyEnum {
  HOME = "HOME",
  MY_KOMPANIONS = "MY_KOMPANIONS",
  MY_APPOINTMENT = "MY_APPOINTMENT",
  MY_STOCKS = "MY_STOCKS",
  MY_REMINDERS = "MY_REMINDERS",
  MY_BUDGET = "MY_BUDGET",
  MY_ACCOUNT = "MY_ACCOUNT",
}

export const pageConfiguration = {
  [PageKeyEnum.HOME]: {
    keyEnum: PageKeyEnum.HOME,
    path: "/home",
    label: "Acceuil",
  },
  [PageKeyEnum.MY_KOMPANIONS]: {
    keyEnum: PageKeyEnum.MY_KOMPANIONS,
    path: "/my-kompanions",
    label: "Mes Kompanions",
  },
  [PageKeyEnum.MY_APPOINTMENT]: {
    keyEnum: PageKeyEnum.MY_APPOINTMENT,
    path: "/my-appointment",
    label: "Mes rendez-vous",
  },
  [PageKeyEnum.MY_STOCKS]: {
    keyEnum: PageKeyEnum.MY_STOCKS,
    path: "/my-stocks",
    label: "Mes stocks",
  },
  [PageKeyEnum.MY_REMINDERS]: {
    keyEnum: PageKeyEnum.MY_REMINDERS,
    path: "/my-reminders",
    label: "Rappels",
  },
  [PageKeyEnum.MY_BUDGET]: {
    keyEnum: PageKeyEnum.MY_BUDGET,
    path: "/my-budget",
    label: "Mon budget",
  },
  [PageKeyEnum.MY_ACCOUNT]: {
    keyEnum: PageKeyEnum.MY_ACCOUNT,
    path: "/my-account",
    label: "Mon compte",
  },
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page withNavBar={false} Content={<Login />} />,
  },
  {
    path: "/home",
    element: <Page withNavBar={true} Content={<Dashboard />} />,
  },
]);
