import React from 'react'
import './style.css'

const Edukasi = ({title, icons, list, show, onClick}) => {
    return (
        <>
            <div 
                id="line-chart-container" 
                className="vis-container" 
                onClick={onClick}
            >
                {title}
            </div>
            <img src={icons} alt='icon' className='icons'/>
            {show ? (
                    <li>{list}</li>
            ): null}
        </>
    )
}

export default Edukasi