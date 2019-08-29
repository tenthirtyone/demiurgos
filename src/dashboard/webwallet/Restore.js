import React, { Fragment, useState } from "react";
import Panel from "../../ui/Panel";
import Card from "../../ui/Card";
import Ethereum from "./Ethereum";

const Notice = ({ match, history }) => {
  const [mnemonic, setMnemonic] = useState(null);
  const [restore, setRestore] = useState(false);

  const restoreWallet = evt => {
    setRestore(true);
  };

  return restore ? (
    <Ethereum walletMnemonic={mnemonic} />
  ) : (
    <Fragment>
      <Panel className="panel-wallet panel-restore">
        <Card className="">
          <Card className="card-inner">
            <h1 className="heading-2">Enter your Passphrase</h1>

            <input type="password" onInput={e => setMnemonic(e.target.value)} />
            <button className="button button-outline" onClick={restoreWallet}>
              Restore
            </button>
          </Card>
        </Card>
      </Panel>
    </Fragment>
  );
};

export default Notice;
