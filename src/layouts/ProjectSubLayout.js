import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import ProjectContext from "../utils/ProjectContext";
import ProjectSidebar from "../ui/ProjectSidebar";
import Overview from "../dashboard/overview/Overview";
import TokensLayout from "../dashboard/tokens/TokensLayout";
import Hamburger from "../ui/Hamburger";
import AuthenticationLayout from "../dashboard/authentication/AuthenticationLayout";
import BalancesLayout from "../dashboard/balances/BalancesLayout";
import WebWalletLayout from "../dashboard/webwallet/WebWalletLayout";
import PaperWalletLayout from "../dashboard/paperwallet/PaperWalletLayout";
import CustodialWalletsLayout from "../dashboard/custodial/CustodialWalletLayout";
import SendAndReceiveLayout from "../dashboard/sendandreceive/SendAndReceiveLayout";
import BuyAndSellLayout from "../dashboard/buyandsell/BuyAndSellLayout";
import ColdStorageLayout from "../dashboard/coldstorage/ColdStorageLayout";
import NotaryLayout from "../dashboard/notary/NotaryLayout";
import ProcurementLayout from "../dashboard/procurement/ProcurementLayout";
import ProductDataLayout from "../dashboard/productdata/ProductDataLayout";

const ProjectSubLayout = ({ match }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className="product-sub-layout">
      <ProjectSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <div className="product-primary-content">
        <main>
          <Switch>
            <Route path={`${match.path}/overview`} component={Overview} />
            <Route path={`${match.path}/tokens`} component={TokensLayout} />
            <Route path={`${match.path}/balances`} component={BalancesLayout} />
            <Route path={`${match.path}/webwallet`} component={WebWalletLayout} />
            <Route path={`${match.path}/custodialwallet`} component={CustodialWalletsLayout} />
            <Route path={`${match.path}/paperwallet`} component={PaperWalletLayout} />
            <Route path={`${match.path}/sendandreceive`} component={SendAndReceiveLayout} />
            <Route path={`${match.path}/buyandsell`} component={BuyAndSellLayout} />
            <Route path={`${match.path}/procurement`} component={ProcurementLayout} />
            <Route path={`${match.path}/coldstorage`} component={ColdStorageLayout} />
            <Route path={`${match.path}/productdata`} component={ProductDataLayout} />
            <Route path={`${match.path}/notary`} component={NotaryLayout} />
            <Route path={`${match.path}/database`} exact component={AuthenticationLayout} />
            <Route path={`${match.path}/database/:databaseType`} component={AuthenticationLayout} />
            <Redirect to={`${match.path}/overview`} />
          </Switch>
        </main>
      </div>
      <Hamburger showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default ProjectSubLayout;
