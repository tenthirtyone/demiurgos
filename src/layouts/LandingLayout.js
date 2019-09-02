import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPrimaryHeader from "../ui/AuthorizedPrimaryHeader";
import Splash from "../landing/Splash";

const LandingLayout = ({ match }) => {
  return (
    <div className="app blue landing-layout">
      <Switch>
        <Route path="/" exact component={Splash} />
      </Switch>
    </div>
  );
};

export default LandingLayout;
