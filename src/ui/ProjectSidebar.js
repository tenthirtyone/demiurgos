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
        <NavLink activeClassName="active" to={`${match.url}/balances`} onClick={toggleSidebar}>
          Balances
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/webwallet`} onClick={toggleSidebar}>
          Browser Wallet
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/custodialwallet`} onClick={toggleSidebar}>
          Custodial Wallet
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/paperwallet`} onClick={toggleSidebar}>
          Paper Wallet
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/coldstorage`} onClick={toggleSidebar}>
          Hardware Wallet
        </NavLink>
      </nav>
      <nav
        className="open spacing-small"
        onClick={() => {
          setShowAssets(!showAssets);
        }}
      >
        <h1 className="heading-3">Assets</h1>
      </nav>
      <nav className={showAssets ? "nested open" : "nested closed"}>
        <NavLink activeClassName="active" to={`${match.url}/tokens`} onClick={toggleSidebar}>
          Tokens
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/stablecoins`} onClick={toggleSidebar}>
          Stable Coins
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/storage`} onClick={toggleSidebar}>
          NFTs
        </NavLink>
      </nav>

      <nav
        className="open spacing-small"
        onClick={() => {
          setShowTools(!showTools);
        }}
      >
        <h1 className="heading-3">Tools</h1>
      </nav>
      <nav className={showTools ? "nested open" : "nested closed"}>
        <NavLink activeClassName="active" to={`${match.url}/explorer`} onClick={toggleSidebar}>
          Block Explorer
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/makercdp`} onClick={toggleSidebar}>
          Maker CDP
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/voting`} onClick={toggleSidebar}>
          DAO Voting
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/notary`} onClick={toggleSidebar}>
          Notary
        </NavLink>
        <NavLink activeClassName="active" to={`${match.url}/monitoring`} onClick={toggleSidebar}>
          Monitoring
        </NavLink>
      </nav>
    </aside>
  );
};

export default withRouter(ProjectSidebar);
