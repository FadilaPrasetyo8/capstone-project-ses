import React from "react";

export function ContentItem({ description, date }) {
  return (
    <div className="content-item">
      <span
        className="desc"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <p className="date">{date}</p>
    </div>
  );
}
