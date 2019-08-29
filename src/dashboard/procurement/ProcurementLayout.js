import React, { Fragment, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Panel from "../../ui/Panel";
import PageHeader from "../../ui/PageHeader";
import { PageHeaderTabs } from "../../ui/PageHeaderTabs";
import Overview from "./Overview";
import Step1 from "./Step1";

const PaperWalletLayout = ({ match, location }) => {
  const [title, setTitle] = useState("Procurement Example");

  return (
    <Fragment>
      {match.url === location.pathname && <Redirect to={`${match.url}/Overview`} />}
      <PageHeader title={title} useMaxWidth={false}>
        <PageHeaderTabs />
      </PageHeader>
      <Panel className="procurement">
        <Switch location={location}>
          <Route path={`${match.path}/Overview`} component={Overview} />
          <Route path={`${match.path}/Step1`} component={Step1} />
        </Switch>
      </Panel>
    </Fragment>
  );
};

export default PaperWalletLayout;
