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

  const fileSelected = evt => {
    const uploadFile = evt.target.files[0];

    setFile(uploadFile);
    setFileName(uploadFile.name);
    setFileSize(uploadFile.size / 1e6);
    setFileType(uploadFile.type);
    fileUpload(uploadFile);
  };

  const clickHandler = evt => {
    document.getElementsByClassName("file-upload")[0].click();
  };

  const fileUpload = async uploadFile => {
    const formData = new FormData();

    formData.append("file", uploadFile);
    setUploading(true);
    const res = await fetch("http://localhost:4000/api/upload", {
      method: "POST",
      body: formData
    });

    const json = await res.json();
    setUploading(false);
    setFileHash(json.hash);
    setTxHash(json.txHash);
  };

  return (
    <Panel>
      <Card className={`file-info`}>
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
        Please wait while your transaction is mined. This can take up to 15-20 seconds.
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
          </p>
        </div>
      </Card>
    </Panel>
  );
};

export default Notary;
