import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import Panel from "../../ui/Panel";
import Card from "../../ui/Card";

const Step3 = ({ match, history }) => {
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
      {back && <Redirect to={`/dashboard/procurement/Step2`} />}
      {forward && <Redirect to={`/dashboard/procurement/Step4`} />}
      <Panel className="panel-wallet">
        <Card className="">
          <Card className="card-inner">
            <h1 className="heading-1">Journal Invoice</h1>
            <h1 className="heading-2">Step 3</h1>
            <p />
            <div />

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

export default Step3;
