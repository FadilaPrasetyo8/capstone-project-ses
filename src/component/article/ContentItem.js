import React from "react";

export function ContentItem({ description, date }) {
  return (
    <div className="content-item">
      <span className="desc">{description}</span>
      <p className="date">{date}</p>
    </div>
  );
}
