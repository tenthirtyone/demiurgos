import React, { useState, useEffect } from "react";
import { Columns, Column } from "react-flex-columns";
import Panel from "../ui/Panel";
import { Redirect } from "react-router-dom";
import Card from "../ui/Card";
import Modal from "../ui/Modal";

const Header = ({ children, ...rest }) => {
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function setMobile() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", setMobile);

    setHidden(false);
    setMobile();
  }, []);

  return (
    <div className={`splash ${hidden ? "hidden" : ""}`}>
      <img src="/static/full-logo.png" alt="Credible Logo" />
      <h1 className="heading-2">Access the Ethereum Blockchain without owning cryptocurrency</h1>
      <input type="email" placeholder="Email Address" />
      <button className="button button-outline">Request Demo</button>
    </div>
  );
};

export default Header;
