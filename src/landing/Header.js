import React, { useState } from "react";
import Panel from "../ui/Panel";
import { Redirect } from "react-router-dom";
import Card from "../ui/Card";
import Modal from "../ui/Modal";

const Header = ({ children, ...rest }) => {
  const [email, setEmail] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function submitEmail() {
    console.log(email);
  }

  return (
    <header className="landing-header">
      <div className="header">
        <span className="logo">
          <img src="/static/logo.png" alt="Credible Logo" />
          <span className="brand">Credible</span>
        </span>
        <nav className="primary-nav">
          <button
            className="button button-outline demo"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            Request Demo
          </button>
        </nav>
      </div>
      <Modal
        className={showModal ? "" : "hidden"}
        onClick={() => {
          console.log("test");
        }}
      >
        <h1 className="heading-1">Request Demo</h1>
        <input type="email" placeholder="Email Address" onChange={evt => setEmail(evt.target.value)} />
        <button className="button button-outline" onClick={submitEmail}>
          Submit
        </button>
        <p>
          <small
            onClick={() => {
              setShowModal(false);
            }}
          >
            close
          </small>
        </p>
      </Modal>
    </header>
  );
};

export default Header;
