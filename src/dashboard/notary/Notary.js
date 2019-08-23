import React, { useState } from "react";
import Panel from "../../ui/Panel";
import Card from "../../ui/Card";

const Notary = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [fileHash, setFileHash] = useState(null);
  const [txHash, setTxHash] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [error, setError] = useState(false);

  const fileSelected = evt => {
    const uploadFile = evt.target.files[0];
    if (uploadFile) {
      setFile(uploadFile);
      setFileName(uploadFile.name);
      setFileSize(uploadFile.size / 1e6);
      setFileType(uploadFile.type);

      fileUpload(uploadFile);
    }
  };

  const clickHandler = evt => {
    setError(false);
    document.getElementsByClassName("file-upload")[0].click();
  };

  const fileUpload = async uploadFile => {
    const formData = new FormData();

    formData.append("file", uploadFile);
    setUploading(true);
    let res;
    try {
      res = await fetch("http://localhost:4000/api/upload", {
        method: "POST",
        body: formData
      });
    } catch (e) {
      return console.error(e);
    }

    setUploading(false);
    const json = await res.json();

    if (res.status === 200) {
      setFileHash(json.hash);
      setTxHash(json.txHash);
    } else if (res.status === 409) {
      //Error message
      setFileHash(json.hash);
      setTxHash(json.txHash);
      console.log("wtf");
      console.log(json);
      setFileName(json.name);
      setFileSize(json.size / 1e6);
      setFileType(json.type);
      setError(true);
    }
  };

  const reset = () => {
    setFile(null);
    setFileName(null);
    setFileSize(null);
    setFileType(null);
    fileUpload(null);
    setUploading(false);
    setFileHash(null);
    setTxHash(null);
    setError(false);

    clickHandler();
  };

  return (
    <Panel>
      <Card className={`file-info`}>
        <Card className={`error ${error ? "" : "removed"}`}>
          <h3 className="heading-3 center-content">Duplicate File</h3>
          <p>This file content has already been notarized.</p>
          <p>
            <button
              className="button button-outline"
              onClick={() => {
                window.open(`https://rinkeby.etherscan.io/tx/${txHash}`, "_blank");
              }}
            >
              View on Etherscan.io
            </button>
          </p>
        </Card>
        <div>
          <p>
            <b>Filename</b>
          </p>
          <p>{fileName}</p>
          <p>
            <b>Type</b>
          </p>
          <p>{fileType}</p>
          <p>
            <b>Size (MiB)</b>
          </p>
          <p>{fileSize}</p>

          <input type="file" className="removed file-upload" onChange={fileSelected} />
          <button
            className={`button button-outline full-width ${fileHash || uploading ? "removed" : ""}`}
            onClick={clickHandler}
          >
            Select a File
          </button>
        </div>
      </Card>
      <Card className={`${uploading ? "" : "removed"}`}>
        <h3 className="heading-3 center-content">
          Please wait while your transaction is mined. This can take up to 15-20 seconds.
        </h3>
        <div className="loader">Loading...</div>{" "}
      </Card>
      <Card className={`${fileHash ? "" : "removed"}`}>
        <div className="transaction-info">
          <p>
            <b>File Fingerprint:</b>
          </p>
          <p>{fileHash}</p>
          <p>
            <b>Tx Hash:</b>
          </p>
          <p>{txHash}</p>
          <p>
            <button
              className="button button-outline"
              onClick={() => {
                window.open(`https://rinkeby.etherscan.io/tx/${txHash}`, "_blank");
              }}
            >
              View on Etherscan.io
            </button>
            <button className="button button-outline" onClick={reset}>
              Select Another File
            </button>
          </p>
        </div>
      </Card>
    </Panel>
  );
};

export default Notary;
