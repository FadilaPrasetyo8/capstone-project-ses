import React from "react";

import { ImageItem } from "./ImageItem";
import { ContentItem } from "./ContentItem";
import { ContentTitle } from "./ContentTitle";

import { Card } from "react-bootstrap";
import "./style.css";

function Content({ data }) {
  return (
    <div className="content-app">
      <Card style={{ width: "60rem", margin: "auto" }}>
        <Card.Body>
          <Card.Title>
            <ContentTitle title={data.title} />
          </Card.Title>
          <Card.Text>
            <ContentItem
              description={data.description}
              date={data.publishedAt}
            />
            <ImageItem
              imageUrl={
                "https://pure-woodland-13460.herokuapp.com" +
                data.image.data.attributes.url
              }
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Content;
