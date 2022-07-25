import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

import TentangKami from "../../component/tentang-kami/TentangKami";
import Profil from "../../component/tentang-kami/Profil";

const AboutUs = () => {
  const [profil, setProfil] = useState([]);

  useEffect(() => {
    axios
      .get("https://capstone-project-json.herokuapp.com/profil")
      .then((res) => {
        console.log(res);
        setProfil(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <TentangKami />
    </div>
  );
};

export default AboutUs;
