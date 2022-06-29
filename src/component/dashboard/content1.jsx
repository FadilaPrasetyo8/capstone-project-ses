import React from "react";
import Group14 from "../image/Group14.png";
import "./content1.css";

const Content1 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="img">
            <img src={Group14} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="main">
            <h2>Apa Itu Stunting?</h2>
            <p className="text-black">
              Stunting adalah masalah kurang gizi kronis yang disebabkan oleh
              kurangnya asupan gizi dalam waktu yang cukup lama, sehingga
              mengakibatkan gangguan pertumbuhan pada anak yakni tinggi badan
              anak lebih rendah atau pendek (kerdil) dari standar usianya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
