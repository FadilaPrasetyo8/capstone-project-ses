import React, { useState, useEffect } from "react";
import Content from "../../component/article/Content";
import axios from "axios";

const ListArticle = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://pure-woodland-13460.herokuapp.com/api/articles?populate=*&sort=id"
      )
      .then((res) => setArticles(res.data.data));
  }, []);

  return (
    <>
      <header className="App-header">Article</header>
      <div className="list-article">
        {articles.map((article) => (
          <Content
            data={article.attributes}
            key={article.id}
            idArticle={article.id}
          />
        ))}
      </div>
    </>
  );
};

export default ListArticle;
