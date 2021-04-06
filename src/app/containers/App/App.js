import React from 'react';
import NavBar from '../NavBar/NavBar';
import Stocks from '../Stocks/Stocks';
import Indexes from '../Indexes/Indexes';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Indexes />
      <Stocks />
      <Profile />
    </div>
  );
}

export default App;
