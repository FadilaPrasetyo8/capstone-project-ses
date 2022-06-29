import React from 'react'
import './style.css'
import { useState,useEffect } from 'react'
import edukasi_img from './edukasi_img.png'
import axios from 'axios'

const Edukasi = () => {

    const [showContent, setShowContent] = useState(false)
    const [edukasi, setEdukasi] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/edukasi')
            .then(res => {
                console.log(res)
                setEdukasi(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const handleClick = () => {
        setEdukasi(!edukasi)
    }

    return (
        <>
            <div className="container-fluid">
                <header className="container-header">
                    <p>Edukasi Stunting</p>
                    <img src={edukasi_img} className="Edukasi-image" alt="Edukasi-image"></img>
                </header>
                <div className="row justify-content-center">
                    {edukasi.map(edu => (
                    <div className="col-sm-3 title" key={edu.id}>
                        <div id="line-chart-container" className="vis-container" >
                                {edu.title}
                        </div>
                        <img src={edu.img} alt='icon' className='icons'/>
                        <li>{edu.list}</li>

                        {/* {edukasi &&
                            <>
                                <img src={edu.img} alt='icon' className='icons'/>
                                <li>{edu.list}</li>
                            </>
                        } */}
                    </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Edukasi