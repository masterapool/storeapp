import React from 'react';

import Ingredient from './Ingredient';

const IngredientsList = ({ ingredients }) => {
  const ingredientsEl = ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });

  return <div>{ingredientsEl}</div>;
};

export default IngredientsList;
