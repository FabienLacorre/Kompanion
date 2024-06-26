import { Avatar, Menu, MenuProps, Space, Typography } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { useEffect, useMemo } from "react";
import { UserOutlined } from "@ant-design/icons";
import "./Navbar.css";
import clsx from "clsx";
import { PageKeyEnum, pageConfiguration } from "../Router";
import { useSelector } from "react-redux";
import { NavigationState, updatePageAction } from "../Stores/NavigationSlice";
import { RootState, useAppDispatch } from "../Stores/store";

type MenuItem = Required<MenuProps>["items"][number];

export const Navbar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigationState: NavigationState = useSelector(
    (state: RootState) => state.navigation
  );
  const menuClassName = clsx("kom-c-menu");
  const leftItemClassName = clsx("kom-c-menu-item");
  const rightItemClassName = clsx("kom-c-menu-item", "kom-c-menu-item--right");

  const items: MenuItem[] = useMemo(() => {
    return [
      {
        label: (
          <a href={pageConfiguration[PageKeyEnum.HOME].path}>
            {pageConfiguration[PageKeyEnum.HOME].label}
          </a>
        ),
        key: pageConfiguration[PageKeyEnum.HOME].keyEnum,
        icon: <AppstoreOutlined />,
        className: leftItemClassName,
      },
      {
        label: (
          <a href={pageConfiguration[PageKeyEnum.MY_KOMPANIONS].path}>
            {pageConfiguration[PageKeyEnum.MY_KOMPANIONS].label}
          </a>
        ),
        key: pageConfiguration[PageKeyEnum.MY_KOMPANIONS].keyEnum,
        icon: <AppstoreOutlined />,
        className: leftItemClassName,
      },
      {
        label: (
          <a href={pageConfiguration[PageKeyEnum.MY_APPOINTMENT].path}>
            {pageConfiguration[PageKeyEnum.MY_APPOINTMENT].label}
          </a>
        ),
        key: pageConfiguration[PageKeyEnum.MY_APPOINTMENT].keyEnum,
        icon: <AppstoreOutlined />,
        className: leftItemClassName,
      },
      {
        label: (
          <a href={pageConfiguration[PageKeyEnum.MY_STOCKS].path}>
            {pageConfiguration[PageKeyEnum.MY_STOCKS].label}
          </a>
        ),
        key: pageConfiguration[PageKeyEnum.MY_STOCKS].keyEnum,
        icon: <AppstoreOutlined />,
        className: leftItemClassName,
      },
      {
        label: (
          <a href={pageConfiguration[PageKeyEnum.MY_REMINDERS].path}>
            {pageConfiguration[PageKeyEnum.MY_REMINDERS].label}
          </a>
        ),
        key: pageConfiguration[PageKeyEnum.MY_REMINDERS].keyEnum,
        icon: <AppstoreOutlined />,
        className: leftItemClassName,
      },
      {
        label: (
          <a href={pageConfiguration[PageKeyEnum.MY_BUDGET].path}>
            {pageConfiguration[PageKeyEnum.MY_BUDGET].label}
          </a>
        ),
        key: pageConfiguration[PageKeyEnum.MY_BUDGET].keyEnum,
        icon: <AppstoreOutlined />,
        className: leftItemClassName,
      },
      {
        label: (
          <a href={pageConfiguration[PageKeyEnum.TEST_PAGE].path}>
            {pageConfiguration[PageKeyEnum.TEST_PAGE].label}
          </a>
        ),
        key: pageConfiguration[PageKeyEnum.TEST_PAGE].keyEnum,
        icon: <AppstoreOutlined />,
        className: leftItemClassName,
      },
      {
        label: (
          <a href={pageConfiguration[PageKeyEnum.MY_ACCOUNT].path}>
            <Space direction="horizontal" size="small" className="full-width">
              <Typography.Text>Mon compte</Typography.Text>
              <Avatar shape="square" size={32} icon={<UserOutlined />} />
            </Space>
          </a>
        ),
        type: "item",
        key: pageConfiguration[PageKeyEnum.MY_ACCOUNT].keyEnum,
        className: rightItemClassName,
      },
    ];
  }, []);

  const handleOnClick: MenuProps["onClick"] = (e) => {
    dispatch(updatePageAction(e.key as PageKeyEnum));
  };

  useEffect(() => {
    const url = window.location.pathname;
    const pageKey = Object.keys(pageConfiguration).find((key) => {
      return pageConfiguration[key as PageKeyEnum].path === url;
    });

    if (pageKey) {
      dispatch(
        updatePageAction(pageConfiguration[pageKey as PageKeyEnum].keyEnum)
      );
    }
  }, []);

  return (
    <Menu
      className={menuClassName}
      selectedKeys={[navigationState.page as string]}
      mode="horizontal"
      items={items}
      onClick={handleOnClick}
    />
  );
};
