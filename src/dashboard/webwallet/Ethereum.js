import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Columns, Column } from "react-flex-columns";
import Panel from "../../ui/Panel";
import QRCode from "qrcode.react";
import Card from "../../ui/Card";
import * as ethers from "ethers";

const Ethereum = ({ walletMnemonic }) => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [txHash, setTxHash] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(null);
  const [mnemonic, setMnemonic] = useState(walletMnemonic);
  const [wallet, setWallet] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(
    () => {
      function setMobile() {
        if (window.innerWidth < 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      }

      async function setupWallet() {
        console.log(mnemonic);
        const privateKey = ethers.Wallet.fromMnemonic(mnemonic).privateKey;

        const provider = ethers.getDefaultProvider("rinkeby");
        const wallet = new ethers.Wallet(privateKey, provider);
        const balance = await provider.getBalance(wallet.address);

        setProvider(provider);
        setWallet(wallet);
        setAddress(wallet.address);
        setBalance(parseFloat(balance / 1e18));
      }

      window.addEventListener("resize", setMobile);

      setupWallet();
      setMobile();
    },
    [address, mnemonic]
  );

  const sendTransaction = async () => {
    setUploading(true);
    const parsedTx = {
      to: to,
      value: ethers.utils.parseEther(amount)
    };
    const tx = await wallet.sendTransaction(parsedTx);
    setUploading(false);
    setTxHash(tx.hash);
  };

  const notify = () => toast("Copied to Clipboard");

  const copyToClipboard = text => {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = "none";
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    notify();
  };

  return (
    <Fragment>
      <Panel className="custodial">
        <Card>
          <div className="heading">
            <h3 className="heading-3">BALANCE</h3>
            <h1 className="heading-1">{balance}</h1>
            <button
              className="button button-outline"
              onClick={() => {
                window.open(`https://rinkeby.etherscan.io/address/${address}`, "_blank");
              }}
            >
              View Tx History
            </button>
          </div>
        </Card>
        <Columns gutterSize={0.8} stack={isMobile}>
          <Column flex>
            <Card className="card-small">
              <Card className="card-inner small-height">
                <QRCode
                  className={`clickable ${address ? "" : "hidden"}`}
                  value={address}
                  renderAs="svg"
                  size={250}
                  onClick={() => {
                    copyToClipboard(address);
                  }}
                />
                <div>
                  <button
                    className="button button-outline button-icon"
                    onClick={() => {
                      copyToClipboard(address);
                    }}
                  >
                    Copy Address
                  </button>
                </div>
              </Card>
            </Card>
          </Column>
          <Column flex>
            <Card className="card-small">
              <Card className="card-inner small-height">
                <h1 className="heading-2">Send</h1>
                <div>
                  <label>To</label>
                  <input
                    type="text"
                    className="max-width"
                    placeholder="0x..."
                    onChange={e => {
                      setTo(e.target.value);
                    }}
                  />
                  <label>Amount</label>
                  <input
                    type="number"
                    className="max-width"
                    placeholder="0"
                    onChange={e => {
                      setAmount(e.target.value);
                    }}
                  />
                  <div className="center-content">
                    <button className="button button-outline" type="button" onClick={sendTransaction}>
                      Send
                    </button>
                  </div>
                </div>
              </Card>
            </Card>
          </Column>
        </Columns>
        <Card className={`${uploading ? "" : "removed"}`}>
          <h3 className="heading-3 center-content">
            Please wait while your transaction is mined. This can take up to 15-20 seconds.
          </h3>
          <div className="loader">Loading...</div>{" "}
        </Card>
        <Card className={`${txHash ? "" : "removed"}`}>
          <div className="transaction-info">
            <p>
              <b>Your transaction has been broadcast.</b>
            </p>
            <p>Once it is mined and indexed by a data provider your balance will reflect the changes.</p>
            <p>
              <b>Tx Hash</b>
            </p>
            <p>{txHash}</p>
            <p>
              <button
                className="button button-outline"
                onClick={() => {
                  window.open(`https://rinkeby.etherscan.io/tx/${txHash}`, "_blank");
                }}
              >
                View on Etherscan.io
              </button>
            </p>
          </div>
        </Card>
      </Panel>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable={false}
        pauseOnHover
      />
    </Fragment>
  );
};

export default Ethereum;
