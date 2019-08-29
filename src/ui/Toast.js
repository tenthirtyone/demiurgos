import React, { useState } from "react";
import classnames from "classnames";

const Toast = ({ children, useMaxWidth, className }) => {
  const [show, setShow] = useState(null);
  return (
    <div className={`${classnames("toast", className)} ${show ? "show" : ""}`}>
      <div className="spacing">{children}</div>
    </div>
  );
};

export default Toast;
