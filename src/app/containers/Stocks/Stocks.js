import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import Stock from '../Stock/Stock';
import { refreshProfile, updateProfile } from '../../reducers/profileSlice';

const Stocks = () => {
  const components = useSelector((state) => state.stocks);
  const dispatch = useDispatch();

  const getProfile = (event, ticker) => {
    event.preventDefault();
    dispatch(refreshProfile(ticker)
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        dispatch(updateProfile(originalPromiseResult));
      }));
  };

  const createStocks = () => {
    if (components) {
      return Object.keys(components).map(
        (quote) => <Stock key={quote} ticker={quote} handleClick={getProfile} />,
      );
    }
    return [];
  };

  return (
    <>
      {createStocks()}
    </>
  );
};

export default Stocks;
