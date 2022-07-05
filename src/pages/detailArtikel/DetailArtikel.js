import React, { useState, useEffect } from "react";
import "./DetailArticle.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailArtikel = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(`https://pure-woodland-13460.herokuapp.com/api/articles/${id}`)
      .then((res) => setArticle(res.data.data.attributes));
  });

  return (
    <div className="container">
      <div className="detail-bg">
        <div className="main-bg">
          <div className="content-h1">
            <h1 className="text-center">{article.title}</h1>
          </div>
        </div>
      </div>

      <div className="main-detail mt-4">
        <div
          className="detail-article"
          dangerouslySetInnerHTML={{ __html: article.description }}
        />
      </div>
    </div>
  );
};

export default DetailArtikel;
