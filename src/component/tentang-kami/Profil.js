import React from 'react'
import './style.css'

function Profil({imgProfil, nama, jobdesk}) {

  return (
      <div>
          <div className="line-chart-container container-pict"  >
              <img src={imgProfil} alt="picture" className="images-profil" />
          </div>
          <h3>{nama}</h3>
          <span>{jobdesk}</span>
      </div>
  )
}

export default Profil