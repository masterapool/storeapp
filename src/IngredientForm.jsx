import React from 'react';

const IngredientForm = ({ ingredient }) => {
  return (
    <>
      <input 
      type="text" 
      className='shadow border rounded outline-none p-1'
      value={ingredient.name}
      />
      <input 
      type="text" 
      className='shadow border rounded outline-none p-1'
      value={ingredient.amount}
      />
      <button className='bg-red-600 text-xl px-2 text-white rounded-md'>&times;</button>
    </>
  );
};

export default IngredientForm;
