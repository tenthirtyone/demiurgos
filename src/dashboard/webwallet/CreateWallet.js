import React, { Fragment, useState, useEffect } from "react";
import Panel from "../../ui/Panel";
import { Redirect } from "react-router";
import { Columns, Column } from "react-flex-columns";
import Card from "../../ui/Card";
import Chart from "../../ui/Chart";
import * as bip39 from "bip39";

const CreateWallet = ({ match, location }) => {
  const [mnemonic, setMnemonic] = useState(null);
  const [backedUp, setBackedUp] = useState(false);

  useEffect(() => {
    const phrase = bip39.generateMnemonic();
    function createMnemonic() {
      setMnemonic(phrase);
    }

    createMnemonic();
  }, []);

  if (backedUp) {
    return <Redirect to={{ pathname: "/dashboard/webwallet/verify", state: { mnemonic } }} />;
  } else {
    return (
      <Fragment>
        <Panel className="panel-wallet">
          <Card className="">
            <Card className="card-inner">
              <p>The following seed passphrase unlocks your cryptocurrency wallet</p>

              <div className="mnemonic">{mnemonic}</div>

              <p>Make a physical backup of these words in the same order to restore your wallet later.</p>
              <p>Do not share this passphrase with any other person or they can access your wallet.</p>

              <button
                className="button button-outline"
                onClick={() => {
                  setBackedUp(true);
                }}
              >
                I've Backed Up My Passphrase
              </button>
            </Card>
          </Card>
        </Panel>
      </Fragment>
    );
  }
};

export default CreateWallet;
