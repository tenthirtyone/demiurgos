import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Columns, Column } from "react-flex-columns";
import Panel from "../../ui/Panel";
import QRCode from "qrcode.react";
import Card from "../../ui/Card";

const Ethereum = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [txHash, setTxHash] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(null);

  async function fetchAPI() {
    const result = await fetch("http://localhost:4000/api/wallet/info");
    const json = await result.json();

    setBalance(json.balance);
    setAddress(json.address);
  }

  useEffect(() => {
    function setMobile() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", setMobile);

    setMobile();
    fetchAPI();
  }, []);

  const sendTransaction = async () => {
    let tx = {
      to,
      value: amount
    };

    setUploading(true);
    let res;
    try {
      res = await fetch("http://localhost:4000/api/wallet/tx", {
        method: "POST",
        body: JSON.stringify(tx),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
    } catch (e) {
      console.log("e");
      return console.error(e);
    }

    const json = await res.json();
    setUploading(false);

    if (res.status === 200) {
      setTxHash(json.hash);
      fetchAPI();
    } else if (res.status === 400) {
      setError(json.error);
    }
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
