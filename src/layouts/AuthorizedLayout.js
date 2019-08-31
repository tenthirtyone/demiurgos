import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import AuthorizedPrimaryHeader from "../ui/AuthorizedPrimaryHeader";
import AccountSubLayout from "./AccountSubLayout";
import ProjectSubLayout from "./ProjectSubLayout";

const AuthorizedLayout = ({ match }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="app blue authorized-layout">
      <AuthorizedPrimaryHeader />
      <Switch>
        <Route path="/" exact component={AccountSubLayout} />
        <Route
          path="/dashboard"
          component={() => <ProjectSubLayout showSidebar={showSidebar} setShowSidebar={setShowSidebar} match={match} />}
        />
      </Switch>
    </div>
  );
};

export default AuthorizedLayout;
