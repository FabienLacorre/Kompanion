import { Button, Form, Input, List, Space, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import clsx from "clsx";
import { fetchDummyDateById } from "../Thunks/DummyDataThunks";
import { RootState, useAppDispatch } from "../Stores/store";
import { DummyData, dummyDataUpdateIdAction } from "../Stores/DummyDataSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ApiStatus } from "../Types/ApiStatus";

export const TestPage = (): JSX.Element => {
  const contentClassName = clsx("content", "full-height");
  const dispatch = useAppDispatch();

  const dummyDataState: DummyData = useSelector(
    (state: RootState) => state.dummyData
  );

  const [localInputId, setLocalInputId] = useState<number>(dummyDataState.id);

  useEffect(() => {
    dispatch(fetchDummyDateById(dummyDataState.id));
  }, []);

  const handleSearchButton = () => {
    dispatch(dummyDataUpdateIdAction(localInputId));
    dispatch(fetchDummyDateById(localInputId));
  };

  const handleChangeIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalInputId(Number(e.target.value));
  };

  return (
    <Content className={contentClassName}>
      <Typography.Title level={2}>
        Tests some interesting things here
      </Typography.Title>

      <Space direction="vertical" className="full-width">
        <Typography.Text>Redux async fetch with thunks: </Typography.Text>
        <a>https://redux.js.org/tutorials/essentials/part-5-async-logic</a>
        <a>https://redux-toolkit.js.org/api/createAsyncThunk</a>

        <form method="dialog" onSubmit={handleSearchButton}>
          <Space direction="horizontal">
            <Input
              size="large"
              className="full-width"
              type="number"
              value={localInputId}
              onChange={handleChangeIdInput}
            />
            <Button htmlType="submit" type="primary">
              Search
            </Button>
          </Space>
        </form>

        <List
          size="small"
          bordered
          dataSource={[
            `id: ${dummyDataState.id}`,
            `userId: ${dummyDataState.userId}`,
            `title: ${dummyDataState.title}`,
            `completed: ${dummyDataState.completed}`,
            `status: ${dummyDataState.status}`,
          ]}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Space>
    </Content>
  );
};
