import React from 'react'
import Content from '../../component/article/Content'

const ListArticle = ({article}) => {
    return(
        <>
            <header className="App-header">Article</header>
            <div className='list-article'>
                {
                    article.map((artic) => (
                        <Content {...artic} key={artic.id} />
                    ))
                }
            </div>
        </>
       
    )
}

export default ListArticle