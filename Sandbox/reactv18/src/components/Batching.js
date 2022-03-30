import { useState } from 'react';

import './Batching.css';

const Batching = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(() => {
      // React 18 and later DOES batch these:
      setCount((c) => c + 1);
      setFlag((f) => !f);
      // React will only re-render once at the end (that's batching!)
    });
  }

  return (
    <div className="batching">
      <h1>Batching</h1>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? 'blue' : 'black' }}>{count}</h1>
    </div>
  );
};

export default Batching;
