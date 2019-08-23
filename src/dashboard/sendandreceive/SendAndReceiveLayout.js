import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Panel from '../../ui/Panel'
import PageHeader from '../../ui/PageHeader'
import { PageHeaderTabs, Tab } from '../../ui/PageHeaderTabs'
import SendAndReceive from './SendAndReceive'


const SendAndReceiveLayout = ({ match, location }) => {
  return (
    <Fragment>
      {match.url === location.pathname && <Redirect to={`${match.url}/overview`} />}
      <PageHeader title="Send & Receive" useMaxWidth={false}>
        <PageHeaderTabs>
          <Tab to={`${match.url}/overview`}>Tx History</Tab>
          <Tab to={`${match.url}/ethereum`}>Ethereum</Tab>
          <Tab to={`${match.url}/Bitcoin`}>Bitcoin</Tab>
        </PageHeaderTabs>
      </PageHeader>
      <Panel>
        <TransitionGroup className="animated-cards">
          <CSSTransition key={location.key} timeout={600} classNames="animated-card">
            <Switch location={location}>           
              <Route path={`${match.path}/overview`} component={SendAndReceive} />            
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Panel>
    </Fragment>
  )
}

export default SendAndReceiveLayout
