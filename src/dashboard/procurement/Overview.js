import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import Panel from "../../ui/Panel";
import Card from "../../ui/Card";

const Notice = ({ match, history }) => {
  const [forward, setForward] = useState(false);

  const goForward = () => {
    setForward(true);
  };

  return (
    <Fragment>
      {forward && <Redirect to={`/dashboard/procurement/Step1`} />}
      <Panel className="panel-wallet">
        <Card className="">
          <Card className="card-inner">
            <h1 className="heading-2">Overview</h1>
            <p>
              This example blockchain procurement application demonstrates the business process improvement of coordinating the
              purchasing and receiving process across a large organization.
            </p>
            <div>
              <h3 className="heading-3">Step 1</h3>
              Creates a mock contract for maintenance hours.
              <h3 className="heading-3">Step 2</h3>
              Issues mock maintenance work orders.
              <h3 className="heading-3">Step 3</h3>
              Journals mock invoices from the maintenance company.
              <h3 className="heading-3">Step 4</h3>
              Accepts the maintenance by the user.
              <h3 className="heading-3">Step 5</h3>
              Approves the invoice and issues payment.
            </div>
            <div className="text-right max-width">
              <button className="button button-outline" onClick={goForward}>
                Continue
              </button>
            </div>
          </Card>
        </Card>
      </Panel>
    </Fragment>
  );
};

export default Notice;
