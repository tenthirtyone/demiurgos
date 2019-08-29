import React, { Fragment, useState } from "react";
import { Switch, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Panel from "../../ui/Panel";
import PageHeader from "../../ui/PageHeader";
import { PageHeaderTabs } from "../../ui/PageHeaderTabs";

const ColdStorageLayout = ({ match, location }) => {
  const [title, setTitle] = useState("Cold Storage");

  return (
    <Fragment>
      {match.url === location.pathname && <Redirect to={`${match.url}/overview`} />}
      <PageHeader title={title} useMaxWidth={false}>
        <PageHeaderTabs />
      </PageHeader>
      <Panel>
        <TransitionGroup className="animated-cards">
          <CSSTransition key={location.key} timeout={600} classNames="animated-card">
            <Switch location={location} />
          </CSSTransition>
        </TransitionGroup>
      </Panel>
    </Fragment>
  );
};

export default ColdStorageLayout;
