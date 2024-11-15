import React, { useEffect, useState } from 'react';
import getSportsNews from '../../services/api';
import './sportNews.scss';  // Импорт стилей

const SportsNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await getSportsNews();
                setNews(data.data);  // data.data — это новости, которые приходят с сервера
                setLoading(false);
            } catch (err) {
                setError('Не удалось загрузить новости');
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="sport-news">
            <ul className="sport-news__list">
                {news.map((article, index) => (
                    <li key={index} className="sport-news__item">
                        {article.image && <img src={article.image} alt={article.title} className="sport-news__item-image" />}
                        <div className="sport-news__item-content">
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="sport-news__item-link">
                                {article.title}
                            </a>
                            <p className="sport-news__item-description">
                                {article.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SportsNews;
