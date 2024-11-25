import React, { useState, useEffect } from 'react';
import Header from './сomponent/header/Header';
import SportsNews from './component/sportsNews/SportNews';

import './App.scss'; // Импорт стилей

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('');  // Категория по умолчанию
    const [categories, setCategories] = useState(["Football", "Basketball", "Tennis", "Baseball"]);

    // Установим категорию по умолчанию на "Football" при первом рендере
    useEffect(() => {
        setSelectedCategory('Football');
    }, []);

    return (
        <div className="app">
            <Header
                categories={categories} 
                selectedCategory={selectedCategory} 
                onCategorySelect={setSelectedCategory} // При клике меняем выбранную категорию
            />
            <SportsNews category={selectedCategory} /> {/* Передаем выбранную категорию */}
        </div>
    );
};

export default App;
