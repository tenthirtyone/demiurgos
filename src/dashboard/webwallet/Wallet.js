import React, { Fragment, useState } from 'react'
import Panel from '../../ui/Panel'
import { Redirect } from 'react-router'
import { Columns, Column } from 'react-flex-columns'
import Card from '../../ui/Card'
import Chart from '../../ui/Chart'

const Wallet = ({ match }) => {    
  return (
  <Fragment>
    <Panel className="panel-wallet">
      <Card className="">
        <Card className="card-inner">
          <button className="button-soft">Create New</button>

          <button className="button-soft">Restore Seed</button>
        </Card>
          
      </Card>
    </Panel>  
  </Fragment>
  )
}

export default Wallet;
