import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Panel from '../../ui/Panel'
import PageHeader from '../../ui/PageHeader'
import { PageHeaderTabs, Tab } from '../../ui/PageHeaderTabs'
import Tokens from './Tokens'


const TokensLayout = ({ match, location }) => {
  return (
    <Fragment>
      {match.url === location.pathname && <Redirect to={`${match.url}/overview`} />}
      <PageHeader title="Buy & Sell" useMaxWidth={false}>
        <PageHeaderTabs>
          <Tab to={`${match.url}/overview`}>Balances</Tab>
          <Tab to={`${match.url}/ethereum`}>Ethereum</Tab>                    
        </PageHeaderTabs>
      </PageHeader>
      <Panel>
        <TransitionGroup className="animated-cards">
          <CSSTransition key={location.key} timeout={600} classNames="animated-card">
            <Switch location={location}>           
              <Route path={`${match.path}/overview`} component={Tokens} />            
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Panel>
    </Fragment>
  )
}

export default TokensLayout
