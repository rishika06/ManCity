import React from "react";
import Layout from "./HOC/layout";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/index.home";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
