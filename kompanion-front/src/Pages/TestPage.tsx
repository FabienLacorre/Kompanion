import clsx from "clsx";
import { Button, Input, List, Space, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { fetchDummyDateById } from "../Thunks/DummyDataThunks";
import { RootState, useAppDispatch } from "../Stores/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ApiStatus } from "../Types/ApiStatus";
import { dummyDataClearIdListAction } from "../Stores/DummyDataSlice";
import { set } from "lodash";

export const TestPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const contentClassName = clsx("content", "full-height");

  // local store variables
  const [selectedId, setSelectedId] = useState(1);
  const [localInputId, setLocalInputId] = useState(selectedId);

  //#region Redux store variables
  const idList = useSelector((state: RootState) => state.dummyData.idList);
  const data = useSelector(
    (state: RootState) => state.dummyData.dataMap[selectedId]?.data
  );
  const metaData = useSelector(
    (state: RootState) => state.dummyData.dataMap[selectedId]?.metaData
  );
  //# endregion

  //#region Handlers
  const handleSearchButton = () => {
    setSelectedId(localInputId);
    dispatch(fetchDummyDateById({ id: localInputId }));
  };

  const handleChangeIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalInputId(Number(e.target.value));
  };

  const handleClearCacheButton = () => {
    setSelectedId(1);
    setLocalInputId(1);
    dispatch(dummyDataClearIdListAction());
    dispatch(fetchDummyDateById({ id: 1 }));
  };
  //#endregion

  //#region useEffect
  useEffect(() => {
    dispatch(fetchDummyDateById({ id: selectedId }));
  }, []);
  //#endregion

  return (
    <Content className={contentClassName}>
      <Typography.Title level={2}>
        Tests some interesting things here
      </Typography.Title>

      <Space direction="vertical" className="full-width">
        <Typography.Text>Redux async fetch with thunks and custom cache management: </Typography.Text>
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
            <Button onClick={handleClearCacheButton} htmlType="button">
              Clear cache
            </Button>
          </Space>
        </form>

        <List
          size="small"
          bordered
          dataSource={[
            `id: ${metaData?.apiStatus === ApiStatus.SUCCEEDED ? data.id : ""}`,
            `userId: ${
              metaData?.apiStatus === ApiStatus.SUCCEEDED ? data.userId : ""
            }`,
            `title: ${
              metaData?.apiStatus === ApiStatus.SUCCEEDED ? data.title : ""
            }`,
            `status: ${metaData?.apiStatus}`,
            `IdList: ${idList}`,
          ]}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Space>
    </Content>
  );
};
