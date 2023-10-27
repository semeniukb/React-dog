import { useState } from 'react';
import { Button } from '@mui/material';
import Arrow from './assets/icons/Arrow.svg?react'
import reactLogo from './assets/react.svg';
import { SvgIcon } from '@mui/material';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>1Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount(c => c + 1)} disableRipple>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
          <Button  variant="contained" color="secondary">Goldendoodle</Button>
          <img src={Arrow} className="logo react" alt="React logo" />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;