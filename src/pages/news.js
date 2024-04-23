import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './news.css'; 
import Footer from './Footer';
const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    
    const apiKey = '69e8238dcdba4e8d80496dfd93c17854';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <><div className="news-container">
      <h1>Latest News</h1>
      <div className="articles">
        {articles.map((article) => (
          <div key={article.url} className="article-card">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="article-image" />
            )}
            <p>{article.publishedAt}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div><Footer /></>
  );
};

export default News;
