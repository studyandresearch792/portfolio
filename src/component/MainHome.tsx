import { Outlet } from "react-router";

import Layout from "./layout";

function MainHome() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default MainHome;
