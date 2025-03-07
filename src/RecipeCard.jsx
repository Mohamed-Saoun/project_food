import './index.css'

const RecipeCard = ({ recipe }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={recipe.image} alt={recipe.label} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{recipe.label}</div>
          <ul className="text-gray-700 text-base list-disc pl-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default RecipeCard;
  