import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

const ProjectSidebar = ({ match, showSidebar, toggleSidebar }) => {
  const [showWallets, setShowWallets] = useState(true);
  const [showAssets, setShowAssets] = useState(false);
  const [showTools, setShowTools] = useState(false);

  return (
    <aside className={"product-sidebar " + (showSidebar ? "show" : "hide")}>
      <nav className="overview">
        <NavLink activeClassName="active" to={`${match.url}/overview`} className="heading-3" onClick={toggleSidebar}>
          Overview
        </NavLink>
      </nav>
      <nav
        className="open spacing-small"
        onClick={() => {
          setShowWallets(!showWallets);
        }}
      >
        <h1 className="heading-3">Wallets</h1>
      </nav>
      <nav className={showWallets ? "nested open" : "nested closed"}>
        <NavLink activeClassName="active" to={`${match.url}/webwallet`} onClick={toggleSidebar}>
          Browser Wallet
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/custodialwallet`} onClick={toggleSidebar}>
          Custodial Wallet
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/paperwallet`} onClick={toggleSidebar}>
          Paper Wallet
        </NavLink>
      </nav>
      <nav
        className="open spacing-small"
        onClick={() => {
          setShowAssets(!showAssets);
        }}
      >
        <h1 className="heading-3">Business Process</h1>
      </nav>
      <nav className={showAssets ? "nested open" : "nested closed"}>
        <NavLink activeClassName="active" to={`${match.url}/productdata`} onClick={toggleSidebar}>
          Asset Data
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/procurement`} onClick={toggleSidebar}>
          Procurement
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/notary`} onClick={toggleSidebar}>
          Notary
        </NavLink>
      </nav>

      <nav
        className="open spacing-small"
        onClick={() => {
          setShowTools(!showTools);
        }}
      >
        <h1 className="heading-3">Gaming</h1>
      </nav>
      <nav className={showTools ? "nested open" : "nested closed"}>
        <NavLink activeClassName="active" to={`${match.url}/explorer`} onClick={toggleSidebar}>
          Fundraising
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/makercdp`} onClick={toggleSidebar}>
          Character Generator
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/voting`} onClick={toggleSidebar}>
          Item generation
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/tradingcards`} onClick={toggleSidebar}>
          Trading Cards
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/onchaingame`} onClick={toggleSidebar}>
          On-Chain Game Logic
        </NavLink>
      </nav>
    </aside>
  );
};

export default withRouter(ProjectSidebar);
