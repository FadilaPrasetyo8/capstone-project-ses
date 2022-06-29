import React from "react";
import Content from "../../component/article/Content";

const ListArticle = ({ article }) => {
  return (
    <>
      <header className="App-header">Article</header>
      <div className="list-article">
        {article.map((articles) => (
          <Content data={articles.attributes} key={articles.id} />
        ))}
      </div>
    </>
  );
};

export default ListArticle;
