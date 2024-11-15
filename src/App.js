
import './index.css'

import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

const APP_ID = '82e453da';
    const APP_KEY = '3bb5d1a3b992f408b9003effd74c9c22';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits.map((hit) => hit.recipe));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div className="App">
      <div className="bg-blue-500 text-white p-4">
      Hello, Tailwind CSS!
    </div>
      <form onSubmit={handleSearch} className="m-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a recipe..."
          className="border-2 border-gray-300 rounded p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>
      <div className="grid grid-cols-3 gap-4 p-4">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
