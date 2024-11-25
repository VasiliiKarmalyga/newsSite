import React from 'react';
import './header.scss';

const Header = ({ categories, selectedCategory, onCategorySelect }) => {
    return (
        <header className="header">
            <nav className="header__menu">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`header__menu-item ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => onCategorySelect(category)} // При клике передаем категорию
                    >
                        {category}
                    </button>
                ))}
            </nav>
        </header>
    );
};

export default Header;
