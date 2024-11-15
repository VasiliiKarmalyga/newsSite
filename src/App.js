// App.js
import React from 'react';
import SportNews from './сomponent/sportNews/SportNews'; // Импортируем компонент с новостями
import './App.css'; // 
const App = () => {
  // Пример данных для новостей
  const newsData = [
    
  ];
  

  return (
    <div className="App">
      <h1>Новости тенниса</h1>
      <SportNews news={newsData} /> {/* Передаем данные в компонент */}
    </div>
  );
};

export default App;
