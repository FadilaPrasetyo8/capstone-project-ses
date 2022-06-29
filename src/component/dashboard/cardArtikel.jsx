import React from "react";
import "./cardArtikel.css";
import Group9 from "../image/Group9.png";

const CardArtikel = () => {
  return (
    <div className="content2 mt-5">
      <div className="header-artikel">
        <h2>Artikel</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card-main">
              <div className="custom-card shadow">
                <div className="card-img">
                  <img src={Group9} alt="" />
                </div>
                <div className="card-content">
                  <a href="#"></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-main">
              <div className="custom-card shadow">
                <div className="card-img">
                  <img src={Group9} alt="" />
                </div>
                <div className="card-content">
                  <a href="#"></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-main">
              <div className="custom-card shadow">
                <div className="card-img">
                  <img src={Group9} alt="" />
                </div>
                <div className="card-content">
                  <a href="#"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArtikel;
