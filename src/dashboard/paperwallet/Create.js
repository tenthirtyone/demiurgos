import React, { Fragment, useState, useEffect } from "react";
import Panel from "../../ui/Panel";
import { Redirect } from "react-router";
import Card from "../../ui/Card";
import * as bip39 from "bip39";
import QRCode from "qrcode.react";
import * as ethers from "ethers";

const CreatePaperWallet = ({ match, location }) => {
  const [mnemonic, setMnemonic] = useState(null);
  const [backedUp, setBackedUp] = useState(false);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const phrase = bip39.generateMnemonic();
    function createMnemonic() {
      setMnemonic(phrase);

      const privateKey = ethers.Wallet.fromMnemonic(phrase).privateKey;

      const provider = ethers.getDefaultProvider("rinkeby");
      const wallet = new ethers.Wallet(privateKey, provider);
      setAddress(wallet.address);
    }

    createMnemonic();
  }, []);

  if (backedUp) {
    return <Redirect to={{ pathname: "/dashboard/webwallet/verify", state: { mnemonic } }} />;
  } else {
    return (
      <Fragment>
        <Panel className="panel-wallet">
          <Card>
            {address ? <QRCode value={address} renderAs="svg" size={250} /> : null}
            {address}
          </Card>
          <Card className="">
            <Card className="card-inner">
              <p>The following seed passphrase unlocks your cryptocurrency wallet</p>

              <div className="mnemonic">{mnemonic}</div>

              <p>Make a physical backup of these words in the same order to restore your wallet later.</p>
              <p>Do not share this passphrase with any other person or they can access your wallet.</p>
            </Card>
          </Card>
        </Panel>
      </Fragment>
    );
  }
};

export default CreatePaperWallet;
