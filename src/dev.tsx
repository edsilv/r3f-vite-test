import React from 'react';
import ReactDOM from 'react-dom/client';
import { Scene } from './index';

const Wrapper = () => {
  
  return (
    <div id="container">
      <Scene />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Wrapper />);
