import React from "react";

const percentage = "%";
const negative = "-";

function addClasses(field) {
  let classes = "";

  if (field.toString().includes(percentage)) {
    classes += " percentage";
  }
  if (field.toString().includes(negative)) {
    classes += " negative";
  }
  if (field.toString().includes(percentage) && !field.includes(negative)) {
    classes += " positive";
  }
  return classes.trim();
}

function createHeader(type, data) {
  switch (type) {
    case "Overview":
      return Object.entries(data[0]).map(field => {
        if (field[0] === "Id") {
          return <td key={field[0]} />;
        } else {
          return <td key={field[0]}>{field[0]}</td>;
        }
      });
    default:
      return Object.entries(data[0]).map(field => {
        return <td key={field[0]}>{field[0]}</td>;
      });
  }
}

function createTable(type, data) {
  switch (type) {
    case "Overview":
      return data.map(item => {
        return (
          <tr key={Math.random()} className="table-item">
            {Object.entries(item).map(field => {
              if (field[0] === "Id") {
                return (
                  <td key={`${item.id}-${field[0]}-${field[1]}`} className={addClasses(field[1])}>
                    <img src={`http://localhost:4000/public/imgs/coins/${item.Id}.png`} />
                  </td>
                );
              } else {
                return (
                  <td key={`${item.id}-${field[0]}-${field[1]}`} className={addClasses(field[1])}>
                    {field[1]}
                  </td>
                );
              }
            })}
            <td>
              <button className="button button-outline">Buy</button>
            </td>
          </tr>
        );
      });
    case "NotaryHistory":
      return data.map(item => {
        return (
          <tr key={Math.random()} className="table-item">
            {Object.entries(item).map(field => {
              if (field[0] === "fileHash") {
                return (
                  <td key={`${item.id}-${field[0]}-${field[1]}`} className={addClasses(field[1])}>
                    <button className="button button-outline">Copy Hash to Clipboard</button>
                  </td>
                );
              } else if (field[0] === "txHash") {
                return (
                  <td key={`${item.id}-${field[0]}-${field[1]}`} className={addClasses(field[1])}>
                    <button className="button button-outline">View on Etherscan</button>
                  </td>
                );
              } else {
                return (
                  <td key={`${item.id}-${field[0]}-${field[1]}`} className={addClasses(field[1])}>
                    {field[1]}
                  </td>
                );
              }

              return (
                <td key={`${item.id}-${field[0]}-${field[1]}`} className={addClasses(field[1])}>
                  {field[1]}
                </td>
              );
            })}
          </tr>
        );
      });
    default:
      return data.map(item => {
        return (
          <tr key={Math.random()} className="table-item">
            {Object.entries(item).map(field => {
              return (
                <td key={`${item.id}-${field[0]}-${field[1]}`} className={addClasses(field[1])}>
                  {field[1]}
                </td>
              );
            })}
          </tr>
        );
      });
  }
}

const Table = ({ type, data }) => {
  if (data && data.length > 0) {
    return (
      <table className={"table-data " + type}>
        <thead className="table-header">
          <tr className="table-item">{createHeader(type, data)}</tr>
        </thead>
        <tbody>{createTable(type, data)}</tbody>
      </table>
    );
  } else {
    // Render Loader
    return null;
  }
};

export default Table;
