import { Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import clsx from "clsx";

export const MyStocks = (): JSX.Element => {
  const contentClassName = clsx("content", "full-height");

  return (
    <Content className={contentClassName}>
      <Typography.Title level={2}>Mes stocks</Typography.Title>
    </Content>
  );
};
