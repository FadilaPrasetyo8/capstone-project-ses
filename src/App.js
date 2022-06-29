import React, { useState, useEffect } from "react";
import axios from "axios";

import ListArticle from "./pages/article-list/ListArticle";
import Education from "./pages/edukasi/Edukasi";
import CheckKesehatan from "./pages/cek-kesehatan/Kesehatan";
import Navigasi from "./pages/navbar/Navbar";
import Dashboard from "./pages/dashboard/dashboard";
import About from "./component/tentang-kami/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
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
    <Router>
      <div className="App">
        <Navigasi />
        <Switch>
          <Route exact path="/" children={<Dashboard />} />
          <Route
            path="/article"
            children={<ListArticle article={articles} />}
          />
          <Route path="/edukasi" children={<Education />} />
          <Route path="/cek-kesehatan" children={<CheckKesehatan />} />
          <Route path="/about" children={<About />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
