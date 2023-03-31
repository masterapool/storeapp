import React from 'react';

const Ingredient = ({ name, amount }) => {
  return (
    <div className="w-[50%] flex justify-between">
      <span>{name}</span>
      <span>{amount}</span>
    </div>
  );
};

export default Ingredient;
