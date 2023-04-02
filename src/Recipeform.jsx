import React, { useContext } from 'react';
import IngredientForm from './IngredientForm';
import { RecipeContext } from './App';

const Recipeform = ({ recipe }) => {
  const { handleRecipeChange } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex(i => i.id === id);

    newIngredients[index] = ingredient;
    
    handleChange({ ingredients: newIngredients });
  }

  return (
    <div className="w-full border-2 m-3 rounded-lg h-[90vh]">
      <div className="flex justify-end pr-4 font-bold text-2xl">
        <button className="hover:text-3xl">&times;</button>
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-y-2 gap-x-2 px-2">
        <label htmlFor="name" className="font-bold">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          onInput={(e) => handleChange({ name: e.target.value })}
          className="shadow border rounded outline-none p-1"
        />
        <label htmlFor="cooktime" className="font-bold">
          Cook Time
        </label>
        <input
          type="text"
          name="cooktime"
          id="cooktime"
          value={recipe.CookTime}
          onInput={(e) => handleChange({ CookTime: e.target.value })}
          className="shadow border rounded outline-none p-1"
        />
        <label htmlFor="servings" className="font-bold">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={recipe.servings}
          onInput={(e) =>
            handleChange({ servings: parseInt(e.target.value) || ' ' })
          }
          className="shadow border rounded outline-none p-1"
        />
        <label htmlFor="instructions" className="font-bold">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          cols="30"
          rows="10"
          value={recipe.instructions}
          onInput={(e) => handleChange({ instructions: e.target.value })}
          className="shadow border rounded outline-none p-1 resize-none h-[200px]"
        />
      </div>
      <br />
      <label className="font-bold px-2">Ingredients</label>
      <div className="grid grid-cols-[5fr_5fr_1fr] gap-x-2 gap-y-2 px-2 mt-4 ml-4">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <IngredientForm
            key={ingredient.id}
            handleIngredientChange={handleIngredientChange}
            ingredient={ingredient}
          />
        ))}
      </div>
      <div className="mt-4 text-center">
        <button className="bg-blue-600 px-2 py-2 mx-3 rounded-lg font-bold text-white">
          Add Ingredients
        </button>
      </div>
    </div>
  );
};

export default Recipeform;
