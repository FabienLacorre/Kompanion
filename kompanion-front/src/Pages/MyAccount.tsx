import { Button, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { pageConfiguration, PageKeyEnum } from "../Router";

export const MyAccount = (): JSX.Element => {
  const navigate = useNavigate();
  const contentClassName = clsx("content", "full-height");

  const handleDisconnectButtonClick = () => {
    navigate(pageConfiguration[PageKeyEnum.LOGIN].path);
  };

  return (
    <Content className={contentClassName}>
      <Typography.Title level={2}>Mon compte</Typography.Title>
      <Button onClick={handleDisconnectButtonClick}>Déconnexion</Button>
    </Content>
  );
};
