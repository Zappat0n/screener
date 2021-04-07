import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { refreshProfile, updateProfile } from '../../reducers/profileSlice';
import Stock from '../Stock/Stock';
import IndustryFilter from '../IndustryFilter/IndustryFilter';
import { updateFilter, updateVisible } from '../../reducers/filterSlice';
import './Stocks.css';

const Stocks = () => {
  const components = useSelector((state) => state.stocks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const getProfile = (event, ticker) => {
    event.preventDefault();
    dispatch(updateVisible());
    dispatch(refreshProfile(ticker))
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        dispatch(updateProfile(originalPromiseResult));
      });
  };

  const createStocks = () => {
    if (components) {
      return Object.keys(components).filter((quote) => (
        components[quote].industry === filter.value || filter.value === 'All')).map(
        (quote) => <Stock key={quote} ticker={quote} handleClick={getProfile} />,
      );
    }
    return [];
  };

  const changeFilter = (industry) => {
    dispatch(updateFilter(industry));
  };

  return (
    <div className={`stocks ${filter.stocksVisible ? 'dFlex' : 'dNone'}`}>
      <IndustryFilter handleChange={changeFilter} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>Industry</th>
          </tr>
        </thead>
        <tbody>
          {createStocks()}
        </tbody>
      </table>
    </div>
  );
};

export default Stocks;
