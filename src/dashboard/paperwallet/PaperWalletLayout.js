import React, { Fragment, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Panel from "../../ui/Panel";
import PageHeader from "../../ui/PageHeader";
import { PageHeaderTabs } from "../../ui/PageHeaderTabs";
import CreatePaperWallet from "./Create";

const PaperWalletLayout = ({ match, location }) => {
  const [title, setTitle] = useState("Paper Wallet");

  return (
    <Fragment>
      {match.url === location.pathname && <Redirect to={`${match.url}/create`} />}
      <PageHeader title={title} useMaxWidth={false}>
        <PageHeaderTabs />
      </PageHeader>
      <Panel className="wallet">
        <Switch location={location}>
          <Route path={`${match.path}/create`} component={CreatePaperWallet} />
        </Switch>
      </Panel>
    </Fragment>
  );
};

export default PaperWalletLayout;
