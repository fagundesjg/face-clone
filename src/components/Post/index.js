import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./styles.scss";

export default function Post({ message, handleRemove }) {
  return (
    <div className="post">
      <p className="description">{message}</p>
      <i className="fa fa-times" onClick={handleRemove} />
    </div>
  );
}
