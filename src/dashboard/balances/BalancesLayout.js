import React, { Fragment, useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Panel from '../../ui/Panel'
import PageHeader from '../../ui/PageHeader'
import { PageHeaderTabs, Tab } from '../../ui/PageHeaderTabs'
import Balances from './Balances'
import Ethereum from './Ethereum'

const BalancesLayout = ({ match, location }) => {
  const [title, setTitle] = useState('Balances');

  function matchTitle() {
    switch (window.location.pathname) {
      case '/dashboard/balances/ethereum':
        setTitle('Ethereum Balance');
        break;
      case '/dashboard/balances/bitcoin':
        setTitle('Bitcoin Balance');
        break;
      default: 
        setTitle('Balances');
        break;
    }    
  }
  
  useEffect(() => {
    matchTitle();
  }, [])

  return (
    <div className="balances">
      <Fragment>
        {match.url === location.pathname && <Redirect to={`${match.url}/overview`} />}
        <PageHeader title={title} useMaxWidth={false}>
          <PageHeaderTabs>
            <Tab to={`${match.url}/overview`} onClick={() => {setTitle('Balances')}}>Balances</Tab>
            <Tab to={`${match.url}/ethereum`} onClick={() => {setTitle('Ethereum Balance')}}>Ethereum</Tab>
            <Tab to={`${match.url}/bitcoin`} onClick={() => {setTitle('Bitcoin Balance')}}>Bitcoin</Tab>
          </PageHeaderTabs>
        </PageHeader>
        <Panel>
          <TransitionGroup className="animated-cards">
            <CSSTransition key={location.key} timeout={600} classNames="animated-card">
              <Switch location={location}>
                <Route path={`${match.path}/overview`} component={Balances} />
                <Route path={`${match.path}/ethereum`} component={Ethereum} />
                <Route path={`${match.path}/ethereum`} component={Ethereum} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Panel>
      </Fragment>
    </div>
  )
}

export default BalancesLayout
