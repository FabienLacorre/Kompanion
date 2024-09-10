import { Button, Card, Input, Layout, Space, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import clsx from "clsx";
import { UserState, userUpdateAction } from "../Stores/UserSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Stores/store";
import { useNavigate } from "react-router-dom";
import { pageConfiguration, PageKeyEnum } from "../Router";
import { loginThunk } from "../Thunks/userThunks";
import { useEffect } from "react";
import { ApiStatus } from "../Types/ApiStatus";
import {
  useSingleMetaDataSelector,
  useSingleDataSelector,
} from "../Stores/selectors";

export const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userState: UserState = useSingleDataSelector<UserState>("user");
  const userStateApiStatus = useSingleMetaDataSelector("user");
  console.log("userState", userState);

  const contentClassName = clsx("content", "full-height", "align-center");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(userUpdateAction({ ...userState, email: e.target.value }));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(userUpdateAction({ ...userState, password: e.target.value }));
  };

  const handleSubmitLoginClick = () => {
    dispatch(
      loginThunk({ email: userState.email, password: userState.password })
    );
  };

  const handleForgotPasswordClick = () => {
    // TODO: implement forgot password
    alert("not implemented yet");
  };

  const handleNoAccountClick = () => {
    navigate(pageConfiguration[PageKeyEnum.REGISTER].path);
  };

  useEffect(() => {
    if (userStateApiStatus === ApiStatus.SUCCEEDED) {
      navigate(pageConfiguration[PageKeyEnum.HOME].path);
    }
  }, [userStateApiStatus]);

  return (
    <Layout style={{ paddingTop: "150px" }}>
      <Content className={contentClassName}>
        <Card title="Kompanion" style={{ width: "300px" }}>
          <form method="dialog" onSubmit={handleSubmitLoginClick}>
            <Space direction="vertical" size="large" className="full-width">
              <Space direction="vertical" className="full-width">
                {/* Email */}
                <Input
                  value={userState.email}
                  onChange={handleChangeEmail}
                  placeholder="Email"
                  size="large"
                  className="full-width"
                  type="email"
                />
                {/* Password */}
                <Input
                  value={userState.password}
                  onChange={handleChangePassword}
                  placeholder="Mot de passe"
                  size="large"
                  type="password"
                />

                {userStateApiStatus === ApiStatus.FAILED && (
                  <Typography.Text type="danger">
                    Email ou mot de passe incorrect
                  </Typography.Text>
                )}
              </Space>
              <Space direction="vertical" className="full-width">
                {/* Submit */}
                <Button size="large" type="primary" htmlType="submit" block>
                  Connexion
                </Button>
                {/* New account */}
                <Button
                  onClick={handleNoAccountClick}
                  size="large"
                  htmlType="button"
                  block
                >
                  Pas encore de compte ?
                </Button>
                {/* Forgot password */}
                <Button onClick={handleForgotPasswordClick} type="link">
                  Mot de passe oublié
                </Button>
              </Space>
            </Space>
          </form>
        </Card>
      </Content>
    </Layout>
  );
};
