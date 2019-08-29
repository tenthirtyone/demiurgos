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
            <h1 className="heading-1">Create Contract</h1>
            <h1 className="heading-2">Step 1</h1>
            <p />
            <div />

            <button className="button button-outline" onClick={goForward}>
              Continue
            </button>
          </Card>
        </Card>
      </Panel>
    </Fragment>
  );
};

export default Notice;
