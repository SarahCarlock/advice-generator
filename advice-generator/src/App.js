import React from 'react';
import './AppStyles.css';
import AdviceContainer from './Components/adviceContainer/adviceContainer.js';

function App() {

  return (
    <div className="App manrope-uniquifier">
      <header className="App-header">
        <div className="col-9">
          <AdviceContainer class="advice-container" />
        </div>
        <div className="attribution">
          Challenge by 
          <a rel="noopener noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>. 
          Coded by Sarah
        </div>
      </header>
    </div>
  );
};

export default App;