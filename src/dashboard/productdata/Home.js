import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Panel from "../../ui/Panel";
import Card from "../../ui/Card";

const Home = ({ match, history }) => {
  const [forward, setForward] = useState(false);
  const [title, setTitle] = useState("");
  const [body_html, setBodyHTML] = useState("");
  const [vendor, setVendor] = useState("");
  const [product_type, setType] = useState("");
  const [image, setImage] = useState("");
  const [referral_url, setReferral] = useState("");
  const [cart_url, setCart] = useState("");
  const [updating, setUpdating] = useState("");
  const [txHash, setTxHash] = useState(null);
  const [price, setPrice] = useState(null);

  const [assetURI, setAssetURI] = useState(null);
  const [assetHash, setAssetHash] = useState(null);
  const [assetOwner, setAssetOwner] = useState(null);

  async function updateProduct() {
    setTxHash(null);
    setUpdating(true);
    let res;

    const product = {
      pid: 0,
      title,
      body_html,
      vendor,
      product_type,
      images: [{ src: image }],
      referral_url,
      cart_url,
      variants: [{ price: parseInt(price) }]
    };

    console.log("product");
    console.log(product);
    try {
      res = await fetch("http://localhost:4000/api/product", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
    } catch (e) {
      return console.error(e);
    }

    setUpdating(false);
    const { tx, asset } = await res.json();
    setTxHash(tx.transactionHash);
    setAssetURI(asset[0]);
    setAssetHash(asset[1]);
    setAssetOwner(asset[2]);
  }

  useEffect(() => {
    async function getProduct(pid) {
      let res;
      try {
        res = await fetch(`http://localhost:4000/api/product/${pid}`, {
          method: "GET"
        });
      } catch (e) {
        return console.error(e);
      }

      const { product } = await res.json();
      console.log(product);
      setTitle(product.title);
      setBodyHTML(product.body_html);
      setVendor(product.vendor);
      setType(product.product_type);
      setImage(product.images[0].src);
      setReferral(product.referral_url);
      setCart(product.cart_url);

      setPrice(product.variants[0].price);
    }

    getProduct(0);
  }, []);

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
              This example blockchain product demonstrates the convergence of business process across multiple organizations and
              applications.
            </p>
            <p>
              The demo will take the product data defined here and share it across multiple platforms. Each platform may
              independetly lookup and verify the data using their own connection to the Ethereum blockchain.
            </p>
            <ul>
              <li>
                Two Shopify stores
                <ul>
                  <li>Automatic Update</li>
                  <li>Manual Update</li>
                </ul>
              </li>
              <li>Homemade Web store</li>
              <li>Affiliate Web Advertising</li>
              <li>A Product Report</li>
            </ul>
            <p>
              The API includes referral and cart links enabling Front End Web Developers to build entire applications stocked by
              Credible products without requiring any backend database, distributors, or payment processor.
            </p>
            <Card className={`${txHash ? "removed" : ""}`}>
              <div>
                <h3 className="heading-3">Edit the product data below.</h3>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Product Name"
                  defaultValue={title}
                  onChange={evt => setTitle(evt.target.value)}
                />
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Product Description"
                  defaultValue={body_html}
                  onChange={evt => setBodyHTML(evt.target.value)}
                />
                <label>Price</label>
                <input
                  type="number"
                  defaultValue={price}
                  onChange={evt => {
                    setPrice(evt.target.value);
                    console.log(evt.target.value);
                  }}
                />
                <label>Vendor</label>
                <input
                  type="text"
                  placeholder="Product Vendor"
                  defaultValue={vendor}
                  onChange={evt => setVendor(evt.target.value)}
                />
                <label>Type</label>
                <input
                  type="text"
                  placeholder="Product Type"
                  defaultValue={product_type}
                  onChange={evt => setType(evt.target.value)}
                />
                <label>Image URL</label>
                <input
                  type="text"
                  placeholder="Product Image"
                  defaultValue={image}
                  onChange={evt => setImage(evt.target.value)}
                />
                <label>Referral URL</label>
                <input
                  type="text"
                  placeholder="Referral URL"
                  defaultValue={referral_url}
                  onChange={evt => setReferral(evt.target.value)}
                />
                <label>Cart URL</label>
                <input type="text" placeholder="Cart URL" defaultValue={cart_url} onChange={evt => setCart(evt.target.value)} />
                <button className={`button button-outline max-width ${updating ? "removed" : ""}`} onClick={updateProduct}>
                  Update Product
                </button>
              </div>
            </Card>
            <Card className={`${updating ? "" : "removed"}`}>
              <h3 className="heading-3 center-content">
                Please wait while your transaction is mined. This can take up to 15-20 seconds.
              </h3>
              <div className="loader">Loading...</div>{" "}
            </Card>
            <Card className={`${txHash ? "" : "removed"}`}>
              <div className="transaction-info">
                <h3 className="heading-3">Your asset has been updated.</h3>
                <p>
                  <b>Asset Hash</b>
                </p>
                <p>{assetHash}</p>
                <p>
                  <b>Asset URL</b>
                </p>
                <p>{assetURI}</p>
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
          </Card>
        </Card>
      </Panel>
    </Fragment>
  );
};

export default Home;
