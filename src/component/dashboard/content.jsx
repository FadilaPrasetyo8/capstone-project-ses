import React from "react";
import "./content.css";
import image from "../image/image.png";
import Group9 from "../image/Group9.png";
import Group10 from "../image/Group10.png";
import Group11 from "../image/Group11.png";

const Content = () => {
  return (
    <div className="konten">
      <div className="konten-main">
        <div className="header">
          <div className="headerh1">
            <h1>Pahami Penyebab Anak Stunting dan</h1>
            <h1>Kenali Cara Pencegahanya</h1>
          </div>
          <div className="headerh5">
            <h5>#AyoCegahStuntingUntukIndonesiaYangLebihSehat</h5>
          </div>
          <div className="images">
            <img src={image} alt="" />
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
                      <a href="/edukasi">
                        Bagaimana cara mengetahui jika anak stunting?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card-main">
                  <div className="custom-card shadow">
                    <div className="card-img">
                      <img src={Group10} alt="" />
                    </div>
                    <div className="card-content">
                      <a href="/edukasi">
                        Bagaimana cara mengetahui jika anak stunting?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              .
              <div className="col">
                <div className="card-main">
                  <div className="custom-card shadow">
                    <div className="card-img">
                      <img src={Group11} alt="" />
                    </div>
                    <div className="card-content">
                      <a href="/edukasi">
                        Bagaimana cara mengetahui jika anak stunting?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
