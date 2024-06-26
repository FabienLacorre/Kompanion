import { Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import clsx from "clsx";

export const Dashboard = (): JSX.Element => {
  const contentClassName = clsx("content", "full-height");

  return (
    <Content className={contentClassName}>
      <Typography.Title level={2}>Acceuil</Typography.Title>

      <ul>
        <li>Mes rendez-vous</li>
        <li>Mes stocks</li>
        <li>Rappels</li>
        <li>Budget</li>
      </ul>
    </Content>
  );
};
