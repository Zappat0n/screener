import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import Index from '../Index/Index';
import { clearStocks, refreshStocks, updateStocks } from '../../reducers/stockSlice';
import indexComponents from '../../data/components';

const Indexes = () => {
  const components = useSelector((state) => state.indexes);
  const dispatch = useDispatch();

  const handleQuery = (event, ticker) => {
    event.preventDefault();
    dispatch(clearStocks());
    dispatch(refreshStocks(indexComponents[ticker].join(',')))
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        dispatch(updateStocks(originalPromiseResult));
      });
  };

  const createIndexes = () => {
    if (components) {
      return Object.keys(components).map(
        (ticker) => <Index key={ticker} ticker={ticker} handleClick={handleQuery} />,
      );
    }
    return [];
  };

  return (
    <>
      {createIndexes()}
    </>
  );
};

export default Indexes;
