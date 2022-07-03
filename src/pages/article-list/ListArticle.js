import React from 'react'
import Content from '../../component/article/Content'
import { useState, useEffect } from "react";
import axios from "axios";

const ListArticle = () => {

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios
        .get(
            "https://capstone-project-json.herokuapp.com/data"
        )
        .then((res) => setArticles(res.data.data));
    }, []);

    return(
        <>
            <header className="App-header">Article</header>
            <div className='list-article'>
                {
                    articles.map((article) => (
                        <Content data={article.attributes} key={article.id}
                    />
                    ))
                }
            </div>
        </>
       
    )
}

export default ListArticle