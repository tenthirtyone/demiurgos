import React, { Fragment, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Panel from "../../ui/Panel";
import PageHeader from "../../ui/PageHeader";
import { PageHeaderTabs } from "../../ui/PageHeaderTabs";
import Ethereum from "./Ethereum";

const CustodialLayout = ({ match, location }) => {
  const [title, setTitle] = useState("Custodial Wallet");

  return (
    <Fragment>
      {match.url === location.pathname && <Redirect to={`${match.url}/home`} />}
      <PageHeader title={title} useMaxWidth={false}>
        <PageHeaderTabs />
      </PageHeader>
      <Panel className="wallet">
        <Switch location={location}>
          <Route path={`${match.path}/home`} component={Ethereum} />
        </Switch>
      </Panel>
    </Fragment>
  );
};

export default CustodialLayout;
