import React from 'react';
import NavBar from '../NavBar/NavBar';
import Stocks from '../Stocks/Stocks';
import Indexes from '../Indexes/Indexes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Indexes />
      <Stocks />
    </div>
  );
}

export default App;
