import React from 'react';

import Ingredient from './Ingredient';

const IngredientsList = ({ Ingredients }) => {
  const ingredientsEl = Ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });

  return <div>{ingredientsEl}</div>;
};

export default IngredientsList;
