import { Avatar, Menu, MenuProps, Space, Typography } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useMemo, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import "./Navbar.css";
import clsx from "clsx";
import { Page } from "./Page";
import { Dashboard } from "../Pages/Dashboard";
import path from "path";
import { PageKeyEnum, pageConfiguration } from "../Router";

type MenuItem = Required<MenuProps>["items"][number];

export const Navbar = (): JSX.Element => {
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
          <>
            <a href={pageConfiguration[PageKeyEnum.MY_ACCOUNT].path}>
              <Space direction="horizontal" size="small" className="full-width">
                <Typography.Text>Mon compte</Typography.Text>
                <Avatar shape="square" size={32} icon={<UserOutlined />} />
              </Space>
            </a>
          </>
        ),
        type: "item",
        key: pageConfiguration[PageKeyEnum.MY_ACCOUNT].keyEnum,
        className: rightItemClassName,
      },
    ];
  }, []);

  const [current, setCurrent] = useState("mail");

  const handleOnClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      className={menuClassName}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      onClick={handleOnClick}
    />
  );
};
