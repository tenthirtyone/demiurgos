import React, { Fragment, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Panel from "../../ui/Panel";
import PageHeader from "../../ui/PageHeader";
import { PageHeaderTabs } from "../../ui/PageHeaderTabs";
import Notice from "./Notice";
import Wallet from "./Wallet";
import CreateWallet from "./CreateWallet";
import VerifyWallet from "./VerifyWallet";
import Restore from "./Restore";

const WebWalletLayout = ({ match, location }) => {
  const [title, setTitle] = useState("Browser Wallet");

  return (
    <Fragment>
      {match.url === location.pathname && <Redirect to={`${match.url}/notice`} />}
      <PageHeader title={title} useMaxWidth={false}>
        <PageHeaderTabs />
      </PageHeader>
      <Panel className="wallet">
        <Switch location={location}>
          <Route path={`${match.path}/notice`} component={Notice} />
          <Route path={`${match.path}/wallet`} component={Wallet} />
          <Route path={`${match.path}/create`} component={CreateWallet} />
          <Route path={`${match.path}/verify`} component={VerifyWallet} />
          <Route path={`${match.path}/restore`} component={Restore} />
        </Switch>
      </Panel>
    </Fragment>
  );
};

export default WebWalletLayout;
