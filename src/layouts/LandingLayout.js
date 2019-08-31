import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPrimaryHeader from "../ui/AuthorizedPrimaryHeader";
import LandingPage from "../landing/LandingPage";

const LandingLayout = ({ match }) => {
  return (
    <div className="app blue landing-layout">
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </div>
  );
};

export default LandingLayout;
