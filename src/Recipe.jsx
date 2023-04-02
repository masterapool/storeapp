import React, { useContext } from 'react';
import IngredientsList from './IngredientsList';
import { RecipeContext } from './App';

const Recipe = (props) => {
  const { id, name, CookTime, servings, instructions, ingredients } = props;

  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);

  return (
    <div className="p-3 border-2 m-3 rounded-lg">
      <div className="flex justify-between mb-4 pb-2 border-b-2">
        <h3 className="text-3xl font-bold">{name}</h3>
        <div className="text-white font-semibold">
          <button 
          className="bg-blue-600 px-2 py-1 mx-2 rounded-lg"
          onClick={() => handleRecipeSelect(id)}
          >
            Edit
          </button>
          <button
            className="bg-red-600 px-2 py-1 rounded-lg"
            onClick={() => handleRecipeDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div>
        <span className="font-bold">Cook Time: </span>
        <span>{CookTime}</span>
      </div>
      <div>
        <span className="font-bold">Servings: </span>
        <span>{servings}</span>
      </div>
      <div>
        <span className="font-bold">Instructions:</span>
        <div className="ml-3 mt-2 whitespace-pre-wrap">{instructions}</div>
      </div>
      <div>
        <span className="font-bold">Ingredients:</span>
        <div className="ml-3 mt-2 ">
          {<IngredientsList ingredients={ingredients} />}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
