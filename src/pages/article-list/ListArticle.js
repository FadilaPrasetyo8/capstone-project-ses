import React, { useState, useEffect } from "react";
import Content from "../../component/article/Content";
import axios from "axios";

const ListArticle = ({ article }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://pure-woodland-13460.herokuapp.com/api/articles?populate=*&sort=id",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU2NDA0MDc4LCJleHAiOjE2NTg5OTYwNzh9.-gXzuOtr0vUo2is0FSQdASVo1euly6IV7s8OV7vAcCk",
          },
        }
      )
      .then((res) => setArticles(res.data.data));
  }, []);

  return (
    <>
      <header className="App-header">Article</header>
      <div className="list-article">
        {articles.map((article) => (
          <Content data={article.attributes} key={article.id} />
        ))}
      </div>
    </>
  );
};

export default ListArticle;
