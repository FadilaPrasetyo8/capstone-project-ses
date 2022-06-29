import React from 'react'
import './style.css'

export function ImageItem({imageUrl}) {
    return(
        <div className='image-item'>
            <img src={imageUrl} alt="gambar"/>
        </div>
    )
}