import React, { Fragment, useState } from "react";
import Panel from "../../ui/Panel";
import { Redirect } from "react-router";
import { Columns, Column } from "react-flex-columns";
import Card from "../../ui/Card";
import Chart from "../../ui/Chart";

const Notice = ({ match, history }) => {
  const [accepted, setAccepted] = useState(false);

  const acceptTerms = () => {
    if (!accepted) {
      setAccepted(true);
    }
  };

  return (
    <Fragment>
      <Panel className="panel-wallet">
        <Card className="">
          <Card className="card-inner">
            <h1 className="heading-2">Notice</h1>
            <p>
              To protect the security of your assets the private keys used by the Credible Browser Wallet reside entirely in
              your browser. It is <b>strongly</b> recommended that you write down or back up the passphrase used to create your
              account.
            </p>
            <p>
              <b>Credible will not be able to recover accounts or funds sent to these accounts.</b>{" "}
            </p>

            <button className="button button-outline" onClick={acceptTerms}>
              I Accept
            </button>
          </Card>
        </Card>

        <Card className={accepted ? "" : "hidden"}>
          <Card className="card-inner wallet-selectors">
            <button
              className="button-soft"
              onClick={() => {
                history.push({ pathname: "/dashboard/webwallet/create", state: { test: 1234 } });
              }}
            >
              Create New
            </button>

            <button
              className="button-soft"
              onClick={() => {
                history.push("/dashboard/webwallet/restore");
              }}
            >
              Restore Seed
            </button>
          </Card>
        </Card>
      </Panel>
    </Fragment>
  );
};

export default Notice;
