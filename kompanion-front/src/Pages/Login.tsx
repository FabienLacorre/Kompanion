import { Button, Card, Input, Layout, Space } from "antd";
import { Content } from "antd/es/layout/layout";
import clsx from "clsx";
import {
  UserState,
  userUpdateEmailAction,
  userUpdatePasswordAction,
} from "../Stores/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Stores/store";
import { useNavigate } from "react-router-dom";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState: UserState = useSelector((state: RootState) => state.user);

  const contentClassName = clsx("content", "full-height", "align-center");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(userUpdateEmailAction(e.target.value));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(userUpdatePasswordAction(e.target.value));
  };

  const handleSubmitLoginClick = () => {
    // TODO: implement login
    navigate("/home");
  };

  const handleForgotPasswordClick = () => {
    // TODO: implement forgot password
    alert("not implemented yet");
  };

  const handleNoAccountClick = () => {
    // TODO: implement new account
    alert("not implemented yet");
  };

  return (
    <Layout style={{ paddingTop: "150px" }}>
      <Content className={contentClassName}>
        <Card title="Kompanion" style={{ width: "300px" }}>
          <Space direction="vertical" size="large" className="full-width">
            <Space direction="vertical" className="full-width">
              {/* Email */}
              <Input
                value={userState.email}
                onChange={handleChangeEmail}
                placeholder="Email"
                size="large"
                className="full-width"
              />
              {/* Password */}
              <Input
                value={userState.password}
                onChange={handleChangePassword}
                placeholder="Mot de passe"
                size="large"
                type="password"
              />
            </Space>

            <Space direction="vertical" className="full-width">
              {/* Submit */}
              <Button
                onClick={handleSubmitLoginClick}
                size="large"
                type="primary"
                block
              >
                Connexion
              </Button>
              {/* New account */}
              <Button onClick={handleNoAccountClick} size="large" block>
                Pas encore de compte ?
              </Button>
              {/* Forgot password */}
              <Button onClick={handleForgotPasswordClick} type="link">
                Mot de passe oublié
              </Button>
            </Space>
          </Space>
        </Card>
      </Content>
    </Layout>
  );
};
