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
      {/* <Card style={{ width: "60rem", margin: "auto" }}>
        <Card.Body>
          <Card.Title>
            <ContentTitle title={data.data.title} />
          </Card.Title>
          <Card.Text>
            <ContentItem
              description={data.data.description}
              date={data.data.publishedAt}
            />
            <ImageItem />
          </Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default Content;
