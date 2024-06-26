import { Button, Card, Space, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import clsx from "clsx";
import { PlusCircleOutlined } from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";

export const MyKompanions = (): JSX.Element => {
  const contentClassName = clsx("content", "full-height");

  return (
    <Content className={contentClassName}>
      <Typography.Title level={2}>Mes Kompanions</Typography.Title>

      <Space direction="vertical" size={"large"}>
        <Button type="primary" icon={<PlusCircleOutlined />} size="large">
          Ajouter un Kompanion
        </Button>

        <Card title="Kompanion 1" style={{ width: 300 }}>
          <p>Contenu du Kompanion 1</p>
        </Card>

        <Card title="Kompanion 1" style={{ width: 300 }}>
          <p>Contenu du Kompanion 1</p>
        </Card>
      </Space>
    </Content>
  );
};
