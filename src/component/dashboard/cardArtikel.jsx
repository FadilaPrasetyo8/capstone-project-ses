import React from "react";
import "./cardArtikel.css";
import Group9 from "../image/Group9.jpg";
import Group10 from "../image/Group10.jpg";
import Group11 from "../image/Group11.jpg";


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
                <div className="card-img-article">
                  <img src={Group9} alt="" />
                </div>
                <div className="card-content title">
                  <a href="/article">Bahaya Penyakit Stunting Pada Anak</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-main">
              <div className="custom-card shadow">
                <div className="card-img-article">
                  <img src={Group10} alt="" />
                </div>
                <div className="card-content title">
                  <a href="/article">Gejala Penyakit Stunting Yang Menghambat Pertumbuhan Anak</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-main">
              <div className="custom-card shadow">
                <div className="card-img-article">
                  <img src={Group11} alt="" />
                </div>
                <div className="card-content title">
                  <a href="/article">Rekomendasi Makanan Untuk Penderita Stunting</a>
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
