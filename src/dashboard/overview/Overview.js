import React, { Fragment, useEffect, useState } from 'react'
import { Columns, Column } from 'react-flex-columns'
import Panel from '../../ui/Panel'
import Card from '../../ui/Card'
import PageHeader from '../../ui/PageHeader'
import Table from '../../ui/Table'


const Overview = () => {  
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const result = await fetch('http://localhost:4000/api/overview');
      const coins = await result.json();      
      
      setData(coins);
    }

    fetchAPI();
  }, [])

  return (
    <Fragment>
      <PageHeader style={{ height: '25em' }}>
        <h1 className="heading-1 horizontal-spacing">
          Overview
        </h1>
      </PageHeader>
      {/* The extra height of the header and the negative margin of this div
          pulls the panel up into the blue area of the header
      */}
      <div style={{ marginTop: '-18em' }}>
        <Panel>  
          <Column flex>
            <Card>
              <Table
                type={'Overview'}
                data={data}>
                
              </Table>  
            </Card>
          </Column>                    
        </Panel>
      </div>
    </Fragment>
  )
}

export default Overview
