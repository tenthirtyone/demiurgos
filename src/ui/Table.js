import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                    <img alt={`${field[0]}-img`} src={`http://localhost:4000/public/imgs/coins/${item.Id}.png`} />
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
      const notify = () => toast("Copied to Clipboard");

      const copyToClipboard = text => {
        console.log(text);
        var dummy = document.createElement("textarea");
        // to avoid breaking orgain page when copying more words
        // cant copy when adding below this code
        // dummy.style.display = "none";
        document.body.appendChild(dummy);
        //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);

        notify();
      };

      return data.map(item => {
        return (
          <tr key={Math.random()} className="table-item">
            {Object.entries(item).map(field => {
              if (field[0] === "Hash") {
                return (
                  <td key={`${item.id}-${field[0]}-${field[1]}`} className={addClasses(field[1])}>
                    <button
                      className="button button-outline button-icon"
                      onClick={() => {
                        copyToClipboard(field[1]);
                      }}
                    >
                      <i className="fi-clipboard-notes large" />
                    </button>
                    <ToastContainer
                      position="bottom-center"
                      autoClose={2000}
                      hideProgressBar={true}
                      newestOnTop
                      closeOnClick
                      rtl={false}
                      pauseOnVisibilityChange
                      draggable={false}
                      pauseOnHover
                    />
                  </td>
                );
              } else if (field[0] === "Tx") {
                return (
                  <td key={`${item.id}-${field[0]}-${field[1]}`} className={addClasses(field[1])}>
                    <button
                      className="button button-outline button-icon"
                      onClick={() => {
                        window.open(`https://rinkeby.etherscan.io/tx/${field[1]}`, "_blank");
                      }}
                    >
                      <i className="fi-magnifying-glass large" />
                    </button>
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
