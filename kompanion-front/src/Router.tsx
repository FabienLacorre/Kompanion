import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Page } from "./Components/Page";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";
import { forOwn } from "lodash";
import { MyKompanions } from "./Pages/MyKompanions";
import { MyAppointments } from "./Pages/MyAppointments";
import { MyStocks } from "./Pages/MyStocks";
import { MyReminders } from "./Pages/MyReminders";
import { MyBudget } from "./Pages/MyBudget";
import { MyAccount } from "./Pages/MyAccount";
import { TestPage } from "./Pages/TestPage";
import { Register } from "./Pages/Register";

export enum PageKeyEnum {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  HOME = "HOME",
  MY_KOMPANIONS = "MY_KOMPANIONS",
  MY_APPOINTMENT = "MY_APPOINTMENT",
  MY_STOCKS = "MY_STOCKS",
  MY_REMINDERS = "MY_REMINDERS",
  MY_BUDGET = "MY_BUDGET",
  MY_ACCOUNT = "MY_ACCOUNT",
  TEST_PAGE = "TEST_PAGE",
}

export const pageConfiguration = {
  [PageKeyEnum.LOGIN]: {
    keyEnum: PageKeyEnum.LOGIN,
    path: "/",
    Content: <Login />,
    withNavbar: false,
  },
  [PageKeyEnum.REGISTER]: {
    keyEnum: PageKeyEnum.REGISTER,
    path: "/register",
    Content: <Register />,
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
    Content: <MyKompanions />,
    withNavbar: true,
  },
  [PageKeyEnum.MY_APPOINTMENT]: {
    keyEnum: PageKeyEnum.MY_APPOINTMENT,
    path: "/my-appointment",
    label: "Mes rendez-vous",
    Content: <MyAppointments />,
    withNavbar: true,
  },
  [PageKeyEnum.MY_STOCKS]: {
    keyEnum: PageKeyEnum.MY_STOCKS,
    path: "/my-stocks",
    label: "Mes stocks",
    Content: <MyStocks />,
    withNavbar: true,
  },
  [PageKeyEnum.MY_REMINDERS]: {
    keyEnum: PageKeyEnum.MY_REMINDERS,
    path: "/my-reminders",
    label: "Rappels",
    Content: <MyReminders />,
    withNavbar: true,
  },
  [PageKeyEnum.MY_BUDGET]: {
    keyEnum: PageKeyEnum.MY_BUDGET,
    path: "/my-budget",
    label: "Mon budget",
    Content: <MyBudget />,
    withNavbar: true,
  },
  [PageKeyEnum.TEST_PAGE]: {
    keyEnum: PageKeyEnum.TEST_PAGE,
    path: "/test-page",
    label: "Page de test",
    Content: <TestPage />,
    withNavbar: true,
  },
  [PageKeyEnum.MY_ACCOUNT]: {
    keyEnum: PageKeyEnum.MY_ACCOUNT,
    path: "/my-account",
    label: "Mon compte",
    Content: <MyAccount />,
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
