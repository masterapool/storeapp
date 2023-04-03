import React, { useState, useEffect } from 'react';
import Recipeform from './Recipeform';
import RecipeList from './RecipeList';
import recipesDB from './Recipies.json';
import { v4 } from 'uuid';

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'pipeReact.recipes';

function App() {
  const [recipes, setRecipes] = useState(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON == null) {
      return recipesDB;
    } else {
      return JSON.parse(recipeJSON);
    }
  });

  const [selectedRecipeId, setSelectedRecipeId] = useState();

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: v4(),
      name: '',
      CookTime: '',
      servings: 1,
      instructions: '',
      ingredients: [{ id: v4(), name: '', amount: '' }],
    };

    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);

    newRecipes[index] = recipe;

    setRecipes(newRecipes);
  }

  function handleRecipeDelete(id) {
    if(selectedRecipeId != null && selectedRecipeId === id){
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <div className="flex justify-evenly w-[80%] mx-auto">
        <RecipeList recipes={recipes} />

        {selectedRecipe && <Recipeform recipe={selectedRecipe} />}
      </div>
    </RecipeContext.Provider>
  );
}

export default App;
