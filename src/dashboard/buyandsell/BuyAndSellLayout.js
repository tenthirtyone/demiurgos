import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Panel from '../../ui/Panel'
import PageHeader from '../../ui/PageHeader'
import { PageHeaderTabs, Tab } from '../../ui/PageHeaderTabs'
import BuyAndSell from './BuyAndSell'


const BuyAndSellLayout = ({ match, location }) => {
  return (
    <Fragment>
      {match.url === location.pathname && <Redirect to={`${match.url}/overview`} />}
      <PageHeader title="Buy & Sell" useMaxWidth={false}>
        <PageHeaderTabs>
          <Tab to={`${match.url}/overview`}>Purchase History</Tab>
          <Tab to={`${match.url}/ethereum`}>Ethereum</Tab>
          <Tab to={`${match.url}/Bitcoin`}>Bitcoin</Tab>
        </PageHeaderTabs>
      </PageHeader>
      <Panel>
        <TransitionGroup className="animated-cards">
          <CSSTransition key={location.key} timeout={600} classNames="animated-card">
            <Switch location={location}>           
              <Route path={`${match.path}/overview`} component={BuyAndSell} />            
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Panel>
    </Fragment>
  )
}

export default BuyAndSellLayout
