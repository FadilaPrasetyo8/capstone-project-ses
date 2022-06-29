import React from 'react'
import './style.css'

import { Container } from 'react-bootstrap'

function About() {
  return (
    <div>
        <div className='container-image'>
            <div className='container-sub'>
                <div className='content-item'>
                    <h1>TENTANG KAMI</h1>
                    <p>Stunting adalah masalah gizi kronis akibat kurangnya asupan
                       gizi dalam jangka waktu panjang sehingga mengakibatkan terganggunya 
                       pertumbuhan pada anak. Menyadari bahwa stunting adalah masalah 
                       kesehatan yang berisiko tinggi dan dapat memengaruhi pertumbuhan 
                       anak hingga dewasa, SES hadir sebagai website edukasi mengenai 
                       stunting, bekerja sama dengan YABB melalui program studi independent 
                       kampus merdeka untuk berbagi mengenai bagaimana pencegahan penyakit 
                       stunting</p>
                </div>
            </div>
        </div>

        <div className="row justify-content-center">
            <div className="col-sm-3 profil">
                <div id="line-chart-container" className="vis-container" >
                        <img src=''/>
                </div>
                <h2>Fadilla Prasetya</h2>
                <span>Frontend/UI Design</span>
            </div>
            <div className="col-sm-3 profil">
                <div id="line-chart-container" className="vis-container" >
                        <img src=''/>
                </div>
                <h2>Doly Prahoro</h2>
                <span>Frontend/UI Design</span>
            </div>
            <div className="col-sm-3 profil">
                <div id="line-chart-container" className="vis-container" >
                        <img src=''/>
                </div>
                <h2>Lutfiah Adifa</h2>
                <span>Frontend/UI Design</span>
            </div>
            <div className="col-sm-3 profil">
                <div id="line-chart-container" className="vis-container" >
                        <img src=''/>
                </div>
                <h2>Nerla Nurlela</h2>
                <span>Frontend/UI Design</span>
            </div>
            <div className="col-sm-3 profil">
                <div id="line-chart-container" className="vis-container" >
                        <img src=''/>
                </div>
                <h2>Khoirunissa</h2>
                <span>Frontend/UI Design</span>
            </div>
        </div>
    </div>
  )
}

export default About