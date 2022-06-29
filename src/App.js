import React from "react";

import ListArticle from "./pages/article-list/ListArticle";
import Education from "./pages/edukasi/Edukasi";
import CheckKesehatan from "./pages/cek-kesehatan/Kesehatan";
import Navigasi from "./pages/navbar/Navbar";
import Dashboard from "./pages/dashboard/dashboard";
import About from "./component/tentang-kami/About";
import DetailArtikel from "./pages/detailArtikel/DetailArtikel";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigasi />
        <Switch>
          <Route exact path="/" children={<Dashboard />} />
          <Route exact path="/article" children={<ListArticle />} />
          <Route path="/detail-article" children={DetailArtikel} />
          <Route path="/edukasi" children={<Education />} />
          <Route path="/cek-kesehatan" children={<CheckKesehatan />} />
          <Route path="/about" children={<About />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
