import React, { useEffect, useState, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import Panel from '../ui/Panel'
import Tiles from '../ui/Tiles'
import Card from '../ui/Card'
import AddProduct from '../dashboard/AddProduct'


const AccountSubLayout = ({ match, history }) => {
  const [products, setProjects] = useState(false)

  useEffect(() => {
    let isCurrent = true
    
    return () => (isCurrent = false)
  }, [])

  return (
    <div className="account-sub-layout">
      <Panel className="panel-welcome-to-credible">
        <h1 className="heading-1">Milton Pencil Co!</h1>        
        <address>
          123 Friedman Ln <br />
          Pittsburgh Pa <br />
          15201 <br />
        </address>
        <p>
          Every consumer has the right to an informed decision  
        </p>
        <p className="horizontal-spacing">
          <a href="#">Learn More</a>
          <a href="#">Documentation</a>
          <a href="#">Support</a>
        </p>
      </Panel>
      <Panel className="panel-recent-products">
        <Route path="/products/add" component={AddProduct} />
        <Route
          path="/products"
          exact
          render={() => {
            return (
              <Fragment>
                <p>Recent products</p>
                <div>
                  <Tiles>
                    <Card className="card-recent-product center-blocks" style={{ height: '14em', cursor: 'pointer' }}>
                      <Link className="block" to="/products/add">
                        Add Product
                      </Link>
                    </Card>
                    {Array.isArray(products) &&
                      products.map(product => (
                        <div role="link" key={product.id} onClick={() => history.push(`/products/${product.id}`)}>
                          <Card
                            className="card-recent-product spacing-small"
                            style={{ height: '14em', cursor: 'pointer' }}>
                            <h1 className="heading-3">{product.name}</h1>
                            <div>{product.id}</div>
                          </Card>
                        </div>
                      ))}
                  </Tiles>
                </div>
              </Fragment>
            )
          }}
        />
      </Panel>
    </div>
  )
}

export default AccountSubLayout
