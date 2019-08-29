import React from "react";
import Panel from "../../ui/Panel";
import Card from "../../ui/Card";
import Table from "../../ui/Table";

let data = [{ Asset: "Ethereum", Total: 358.123, Price: 1028.12 }, { Asset: "Bitcoin", Total: 102.7682, Price: 21912.34 }];

data.forEach(wallet => {
  wallet.Value = wallet.Total * wallet.Price;
  wallet.Value = wallet.Value.toLocaleString("en");
  wallet.Price = "$" + wallet.Price.toLocaleString("en");
});

const Balances = () => {
  return (
    <Panel>
      <Card>
        <div className="price-heading">
          <p>USD</p>
          $35,028.12
        </div>
      </Card>
      <Card>
        Balances
        <Table data={data} type={"balances"} />
      </Card>
    </Panel>
  );
};

export default Balances;
