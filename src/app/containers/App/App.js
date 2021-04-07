import React from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { refreshIndexes, updateIndexes } from '../../reducers/indexSlice';
import Stocks from '../Stocks/Stocks';
import Indexes from '../Indexes/Indexes';
import Profile from '../Profile/Profile';

function App() {
  const dispatch = useDispatch();
  const indexes = useSelector((state) => state.indexes);

  if (indexes['^GSPC'].price === '') {
    dispatch(refreshIndexes(Object.keys(indexes).join(',')))
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        dispatch(updateIndexes(originalPromiseResult));
      });
  }

  return (
    <div className="App">
      <Indexes />
      <Stocks />
      <Profile />
    </div>
  );
}

export default App;
