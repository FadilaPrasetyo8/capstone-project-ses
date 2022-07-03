import React from "react";

export function ContentItem({ description, date }) {
  return (
    <div className="content-item">
      <div className="desc" dangerouslySetInnerHTML={{ __html: description }} />
      <p className="date">{date}</p>
    </div>
  );
}
