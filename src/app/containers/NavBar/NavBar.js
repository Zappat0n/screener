import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import indexComponents from '../../data/components';
import { refreshIndexes, updateIndexes } from '../../reducers/indexSlice';
import { refreshStocks, updateStocks } from '../../reducers/stockSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  const indexes = useSelector((state) => state.indexes);
  console.log(Object.keys(indexes));

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch(refreshIndexes(Object.keys(indexes).join(',')))
          .then(unwrapResult)
          .then((originalPromiseResult) => {
            dispatch(updateIndexes(originalPromiseResult));
          })}
      >
        Refresh Indexes
      </button>
      <button
        type="button"
        onClick={() => dispatch(refreshStocks(indexComponents['^GSPC'].join(',')))
          .then(unwrapResult)
          .then((originalPromiseResult) => {
            dispatch(updateStocks(originalPromiseResult));
          })}
      >
        Refresh Stocks
      </button>
    </>
  );
};

export default NavBar;
