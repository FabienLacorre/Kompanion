import { Button, Card, Input, Layout, Space } from "antd";
import { Content } from "antd/es/layout/layout";
import clsx from "clsx";

export const Login = () => {
  const contentClassName = clsx("content", "full-height", "align-center");
  return (
    <Layout style={{ paddingTop: "150px" }}>
      <Content className={contentClassName}>
        <Card title="Kompanion" style={{ width: "300px" }}>
          <Space direction="vertical" size="large" className="full-width">
            <Space direction="vertical" className="full-width">
              {/* Email */}
              <Input placeholder="Email" size="large" className="full-width" />
              {/* Password */}
              <Input placeholder="Mot de passe" size="large" type="password" />
            </Space>

            <Space direction="vertical" className="full-width">
              {/* Submit */}
              <Button size="large" type="primary" block>
                Connexion
              </Button>
              {/* New account */}
              <Button size="large" block>
                Pas encore de compte ?
              </Button>
              {/* Forgot password */}
              <Button type="link">Mot de passe oublié</Button>
            </Space>
          </Space>
        </Card>
      </Content>
    </Layout>
  );
};
