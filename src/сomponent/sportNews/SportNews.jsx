import React, { useEffect, useState } from 'react';
import getSportsNews from '../../services/api';  // Импортируем функцию для получения новостей
import './sportNews.scss'; // Импорт стилей

const SportsNews = ({ category }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Функция для получения новостей
    const fetchNews = async (category) => {
        try {
            setLoading(true);  // Начинаем загрузку
            const data = await getSportsNews(category);  // Запрос к API
            setNews(data.data || []);  // Сохраняем полученные новости
            setLoading(false);  // Завершаем загрузку
        } catch (err) {
            setError('Не удалось загрузить новости');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews(category);  // Загружаем новости при изменении категории
    }, [category]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="sport-news">
            <ul className="sport-news__list">
                {news.length === 0 ? (
                    <li>Нет новостей по данной категории.</li>
                ) : (
                    news.map((article, index) => (
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
                    ))
                )}
            </ul>
        </div>
    );
};

export default SportsNews;
