import { Button, Card, Input, Layout, Space, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import clsx from "clsx";
import { UserState, userUpdateAction } from "../Stores/UserSlice";
import { useNavigate } from "react-router-dom";
import { pageConfiguration, PageKeyEnum } from "../Router";
import { createUserThunk } from "../Thunks/userThunks";
import { useEffect } from "react";
import { ApiStatus } from "../Types/ApiStatus";
import {
  useSingleMetaDataSelector,
  useSingleDataSelector,
} from "../Stores/selectors";
import { useAppDispatch } from "../Stores/store";

export const Register = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userState: UserState = useSingleDataSelector<UserState>("user");
  const userStateApiStatus = useSingleMetaDataSelector("user");
  const contentClassName = clsx("content", "full-height", "align-center");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(userUpdateAction({ ...userState, email: e.target.value }));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(userUpdateAction({ ...userState, password: e.target.value }));
  };

  const handleSubmitLoginClick = () => {
    dispatch(
      createUserThunk({ email: userState.email, password: userState.password })
    );
  };

  const handleAlreadyGotAccountClick = () => {
    navigate(pageConfiguration[PageKeyEnum.LOGIN].path);
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
                  type="email"
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

                {userStateApiStatus === ApiStatus.FAILED && (
                  <Typography.Text type="danger">
                    Cet email est deja utilisé
                  </Typography.Text>
                )}
              </Space>

              <Space direction="vertical" className="full-width">
                {/* Submit */}
                <Button size="large" type="primary" htmlType="submit" block>
                  Valider
                </Button>
                {/* New account */}
                <Button
                  onClick={handleAlreadyGotAccountClick}
                  size="large"
                  htmlType="button"
                  block
                >
                  Vous avez deja un compte ?
                </Button>
              </Space>
            </Space>
          </form>
        </Card>
      </Content>
    </Layout>
  );
};
