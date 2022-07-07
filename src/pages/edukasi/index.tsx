import React from 'react'
import Edukasi from '../../component/edukasi/Edukasi'
import './style.css'

import { useState,useEffect } from 'react'
import edukasi_img from '../../component/image/edukasi_img.png'
import axios from 'axios'

export default function Education() {

  const [edukasi, setEdukasi] = useState<any | null>([])
  const [indexShow, setIndexShow] = useState();


  useEffect(() => {
      axios
          .get('https://capstone-project-json.herokuapp.com/edukasi')
          .then(res => {
              console.log(res)
              setEdukasi(res.data)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])
  
  return (
    <div className='container-fluid'>
      <header className="container-header">
          <div className='sub-header'>  
            <h2>Kenali dan Pahami Pencegahan Stunting</h2>
            <p>"Cukup Gizi Lengkapi Imunisasi dan Perbaiki Senitasi"
              Sebagai upaya Ibu untuk mencegah stunting sejak dini
              Cerdas Sadar Gizi Cegah Stunting Sejak Dini</p>
          </div>
          <img src={edukasi_img} className="Edukasi-image" alt="Edukasi-image" />
      </header>

      <div className="row justify-content-center">

        {edukasi.map((edu:any, index) => (
          <div className="col-lg-3 content-edukasi" data-testid={`content-item-${index}`} key={index} >
            <Edukasi
              onClick={() => setIndexShow(index)}
              title={edu.title}
              icons={edu.img}
              list={edu.list}
              show={indexShow == index}
            />
          </div>
        ))}
        </div>
    </div>
  )
}
