import React, { useEffect, useState } from "react";
import Panel from "../../ui/Panel";
import Card from "../../ui/Card";
import Table from "../../ui/Table";

const Balances = () => {
  const [history, setHistory] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchAPI() {
      const result = await fetch("http://localhost:4000/api/notary/history");
      const history = await result.json();

      setHistory(history);
      setCount(history.length);
    }

    fetchAPI();
  }, []);

  return (
    <Panel>
      <Card>
        <div className="price-heading">
          <p>Total Files</p>
          <span>{count}</span>
        </div>
      </Card>
      <Card>
        <Table data={history} type={"NotaryHistory"} />
      </Card>
    </Panel>
  );
};

export default Balances;
