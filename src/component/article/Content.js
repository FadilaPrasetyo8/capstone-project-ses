import React from 'react'

import { ImageItem } from './ImageItem'
import { ContentItem } from './ContentItem'
import { ContentTitle } from './ContentTitle'

import { Card } from 'react-bootstrap'
import './style.css'

function Content({data}) {
    return(
        <div className='content-app'>
            <div className="row justify-content-center container-article">
                <div className="col-lg-7 content-article">
                    <article>
                        <ContentTitle title={data.title} />
                    </article>
                    <div className='item'>
                        <ContentItem description={data.description} date={data.date} />
                        <ImageItem imageUrl={data.imageUrl} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content