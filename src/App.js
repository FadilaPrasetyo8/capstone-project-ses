import React from "react";

import ListArticle from "./pages/article-list/ListArticle";
import Education from "./pages/edukasi";
import CheckKesehatan from "./pages/cek-kesehatan/Kesehatan";
import Navigasi from "./pages/navbar/Navbar";
import Dashboard from "./pages/dashboard/dashboard";
import AboutUs from "./pages/tentang/About";
import DetailArtikel from "./pages/detailArtikel/DetailArtikel";
import Footer from './pages/tentang/Footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigasi />
        <Switch>
          <Route exact path="/" children={<Dashboard />} />
          <Route path="/article/:id" children={<DetailArtikel />} />
          <Route path="/article" children={<ListArticle />} />
          <Route path="/edukasi" children={<Education />} />
          <Route path="/cek-kesehatan" children={<CheckKesehatan />} />
          <Route path="/about" children={<AboutUs />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
