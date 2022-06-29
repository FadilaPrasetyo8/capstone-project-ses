import React from 'react'

export function ContentItem({description, date}) {
    return(
        <div className='content-item'>
            <span>{description}</span>
            <p>{date}</p>
        </div>
    )
}