import React, { Fragment, useState, useEffect } from "react";
import Panel from "../../ui/Panel";
import { Columns, Column } from "react-flex-columns";
import Card from "../../ui/Card";
import Chart from "../../ui/Chart";

const Ethereum = () => {
  return (
    <Fragment>
      <Panel>
        <Card>
          <div className="address-heading">
            <p>ADDRESS</p>
            0x84407B932eC042079A051A82e84f84b44D7ad9e7
          </div>
        </Card>
        <Columns gutterSize={0.8}>
          <Column flex>
            <Card>
              <div className="price-heading">
                <p>ETH</p>
                358.123
              </div>
            </Card>
          </Column>
          <Column flex>
            <Card>
              <div className="price-heading">
                <p>USD</p>
                $35,028.123
              </div>
            </Card>
          </Column>
        </Columns>
        <Card>
          <Chart />
        </Card>
      </Panel>
    </Fragment>
  );
};

export default Ethereum;
