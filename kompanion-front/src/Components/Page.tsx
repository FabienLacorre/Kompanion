import { Layout } from "antd";
import { Navbar } from "./Navbar";

export const Page = ({
  Content,
  withNavBar,
}: {
  Content: JSX.Element;
  withNavBar: boolean;
}) => {
  return (
    <Layout>
      {withNavBar && <Navbar />}
      {Content}
    </Layout>
  );
};
