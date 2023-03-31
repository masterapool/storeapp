import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecipeContext } from './App';

const RecipeList = ({ recipes }) => {
  const { handleRecipeAdd } = useContext(RecipeContext);

  return (
    <div className="w-full">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="text-white font-semibold text-center">
        <button
          className="bg-green-500 px-3 py-2 rounded-lg"
          onClick={handleRecipeAdd}
        >
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
