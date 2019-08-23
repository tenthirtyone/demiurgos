import React, { Fragment, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Panel from "../../ui/Panel";
import PageHeader from "../../ui/PageHeader";
import { PageHeaderTabs, Tab } from "../../ui/PageHeaderTabs";
import Notary from "./Notary";
import History from "./History";

const NotaryLayout = ({ match, location }) => {
  const [title, setTitle] = useState("Notary");

  return (
    <Fragment>
      {match.url === location.pathname && <Redirect to={`${match.url}/home`} />}
      <PageHeader title={title} useMaxWidth={false}>
        <PageHeaderTabs>
          <Tab
            to={`${match.url}/home`}
            onClick={() => {
              setTitle("Notary");
            }}
          >
            Notary
          </Tab>
          <Tab
            to={`${match.url}/history`}
            onClick={() => {
              setTitle("Notary History");
            }}
          >
            History
          </Tab>
        </PageHeaderTabs>
      </PageHeader>
      <Panel className="notary">
        <Switch location={location}>
          <Route path={`${match.path}/home`} component={Notary} />
          <Route path={`${match.path}/history`} component={History} />
        </Switch>
      </Panel>
    </Fragment>
  );
};

export default NotaryLayout;
