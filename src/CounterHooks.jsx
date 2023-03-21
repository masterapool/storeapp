import React, { useState } from 'react';

const CounterHooks = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div class="m-6">
      <span class="text-3xl font-bold">Counter</span>
      <div class="my-3 text-2xl">
        <button
          onClick={() => setCount((prevCount) => prevCount - 1)}
          class="py-3 px-3 bg-red-500 mx-2"
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          class="py-3 px-3 bg-blue-500 mx-2"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterHooks;
