import axios from 'axios';

const API_KEY = 'bc45955cd685852c0dcd59b699814711';  
const BASE_URL = 'http://api.mediastack.com/v1/news';

const getSportsNews = async (category) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                access_key: API_KEY,
                keywords: category, // Используем переданную категорию
                languages: 'en', 
                limit: 5, // Ограничиваем количество новостей
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching news", error);
        throw error;
    }
};

export default getSportsNews;
