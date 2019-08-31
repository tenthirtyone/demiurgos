import React, { Fragment, useEffect, useState } from "react";
import { Columns, Column } from "react-flex-columns";
import Panel from "../ui/Panel";
import Card from "../ui/Card";
import Header from "./Header";

const LandingPage = () => {
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

    setMobile();
  }, []);

  return (
    <Fragment>
      <Header />
      <Panel className="panel-landing">
        <Columns gutterSize={0.8} stack={isMobile}>
          <Column flex>
            <Card className="card-landing landing-banner">
              <h1 className="heading-1">An Ethereum Wallet for Business</h1>
              <h3 className="heading-4">
                Securely create, sell, and share blockchain assets without purchasing cryptocurrency
              </h3>
            </Card>
          </Column>
        </Columns>
        <Columns gutterSize={0.8} stack={isMobile}>
          <Column flex>
            <Card className="card-landing">
              <h2 className="heading-2">Crowdfund</h2>
              <p>Securely create, sell, and share blockchain assets </p>
            </Card>
          </Column>
          <Column flex>
            <Card className="card-landing">
              <h2 className="heading-2">No Cryptocurrency</h2>
              <p>Credible manages all the security and risk of interacting with blockchain</p>
            </Card>
          </Column>
          <Column flex>
            <Card className="card-landing">
              <h2 className="heading-2">REST API</h2>
              <p>Develop applications that interact with Ethereum through a REST API.</p>
            </Card>
          </Column>
        </Columns>
      </Panel>
    </Fragment>
  );
};

export default LandingPage;
