import React from "react";

import { ImageItem } from "./ImageItem";
import { ContentItem } from "./ContentItem";
import { ContentTitle } from "./ContentTitle";
import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";
import "./style.css";

function Content({ data, idArticle }) {
  return (
    <div className="content-app">
      <Link to={`/article/${idArticle}`}>
        {/* <ContentTitle title={data.title} /> */}
        {data.title}
      </Link>
      <div className="item">
        <ContentItem description={data.description} date={data.date} />
        <ImageItem imageUrl={data.imageUrl} />
      </div>
    </div>
  );
}

export default Content;
