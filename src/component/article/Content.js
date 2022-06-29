import React from 'react'

import { ImageItem } from './ImageItem'
import { ContentItem } from './ContentItem'
import { ContentTitle } from './ContentTitle'

import { Card } from 'react-bootstrap'
import './style.css'

function Content({title, description, date, imageUrl}) {
    return(
        <div className='content-app'>
            {/* <article>
                <ContentTitle title={title} />
            </article>
            <div className='item'>
                <ContentItem description={description} date={date} />
                <ImageItem imageUrl={imageUrl} />
            </div> */}

            <Card style={{ width: '60rem', margin: 'auto' }}>
                <Card.Body>
                    <Card.Title>
                        <ContentTitle title={title} />
                    </Card.Title>
                    <Card.Text>
                        <ContentItem description={description} date={date} />
                        <ImageItem imageUrl={imageUrl} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Content