import React from "react";
import "./style.css";

export function ContentTitle({ title }) {
  return (
    <div className="content-title">
      <a href="#">{title}</a>
    </div>
  );
}
