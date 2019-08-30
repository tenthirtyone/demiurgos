import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import Panel from "../../ui/Panel";
import Card from "../../ui/Card";

const Step1 = ({ match, history }) => {
  const [forward, setForward] = useState(false);
  const [back, setBack] = useState(false);

  const goForward = () => {
    setForward(true);
  };

  const goBack = () => {
    setBack(true);
  };

  return (
    <Fragment>
      {back && <Redirect to={`/dashboard/procurement/Overview`} />}
      {forward && <Redirect to={`/dashboard/procurement/Step2`} />}
      <Panel className="panel-wallet">
        <Card className="">
          <Card className="card-inner">
            <h1 className="heading-1">Create Contract</h1>
            <h1 className="heading-2">Step 1</h1>
            <p>Complete the following contract:</p>

            <div>
              <i>The contractor shall perform up to the following number of hours in maintenance work:</i>
              <input className="maintenance-hours" type="number" value="10" />
            </div>
            <small>The contract maximum caps at 100 hours.</small>

            <div className="text-left">
              <button className="button button-outline" onClick={goBack}>
                Go Back
              </button>
            </div>

            <div className="text-right">
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

export default Step1;
