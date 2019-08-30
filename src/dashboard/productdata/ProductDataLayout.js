import React, { Fragment, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Panel from "../../ui/Panel";
import PageHeader from "../../ui/PageHeader";
import { PageHeaderTabs } from "../../ui/PageHeaderTabs";
import Home from "./Home";

const PaperWalletLayout = ({ match, location }) => {
  const [title, setTitle] = useState("Product Data Example");

  return (
    <Fragment>
      {match.url === location.pathname && <Redirect to={`${match.url}/home`} />}
      <PageHeader title={title} useMaxWidth={false}>
        <PageHeaderTabs />
      </PageHeader>
      <Panel className="product-data">
        <Switch location={location}>
          <Route path={`${match.path}/home`} component={Home} />
        </Switch>
      </Panel>
    </Fragment>
  );
};

export default PaperWalletLayout;
