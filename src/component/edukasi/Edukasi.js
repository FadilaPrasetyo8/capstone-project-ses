import React from 'react'
import './style.css'

const Edukasi = ({title, icons, list, show, onClick}) => {
    return (
        <>
            <div 
                data-testid="content-item" 
                className="vis-container" 
                onClick={onClick}
            >
                {title}
            </div>
            <img src={icons} alt='icon' className='icons'/>
            {show ? (
                    <li data-testid="theList">{list}</li>
            ): null}
        </>
    )
}

export default Edukasi