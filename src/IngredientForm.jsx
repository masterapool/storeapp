import React from 'react';

const IngredientForm = (props) => {
  const { ingredient, handleIngredientChange } = props;

  function handleIChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        type="text"
        className="shadow border rounded outline-none p-1"
        onChange={e => handleIChange({ name: e.target.value })}
        value={ingredient.name}
      />
      <input
        type="text"
        className="shadow border rounded outline-none p-1"
        onInput={e => handleIChange({ amount: e.target.value })}
        value={ingredient.amount}
      />
      <button className="bg-red-600 text-xl px-2 text-white rounded-md">
        &times;
      </button>
    </>
  );
};

export default IngredientForm;
