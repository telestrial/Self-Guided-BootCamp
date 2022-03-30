import { useState } from 'react';
import './App.css';

import Batching from './components/Batching';

function App() {
  const [location, setLocation] = useState([]);

  const onBatchingClickHandler = () => {
    console.log('Batch');
  };

  return (
    <>
      <div className="feature-buttons">
        <h1>React 18 Features</h1>
        <button onClick={onBatchingClickHandler}>Batching</button>
      </div>
      <div className="features">
        <Batching />
      </div>
    </>
  );
}

export default App;
