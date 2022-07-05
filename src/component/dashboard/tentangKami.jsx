import "./tentangKami.css";
import React from "react";
import logomitra from "../image/logo_mitra.png"

const TentangKami = () => {
  return (
    <div className="aboutme">
      <div className="container aboutme">
        <div className="row">
          <div className="col">
            <h3>Tentang Kami</h3>
            <p>
              Jumlah penderita stunting di 
              Indonesia sendiri terus mengalami peningkatan. Adapun maksud 
              pembuatan website ini, untuk mengedukasi para Ibu dan masyarakat 
              akan pentingnya pencegahan stunting. Dan juga dibutuhkan peran para 
              anak muda untuk membantu mensosialisasikan “Pentingnya pencegahan stunting 
              pada anak” melalui website yang telah dibuat.
            </p>
          </div>
          <div className="col images-logo">
            <img src={logomitra} alt="pict" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
