import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { refreshProfile, updateProfile } from '../../reducers/profileSlice';
import Stock from '../Stock/Stock';
import IndustryFilter from '../IndustryFilter/IndustryFilter';
import { updateFilter } from '../../reducers/filterSlice';

const Stocks = () => {
  const components = useSelector((state) => state.stocks);
  const filter = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();

  const getProfile = (event, ticker) => {
    event.preventDefault();
    dispatch(refreshProfile(ticker))
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        dispatch(updateProfile(originalPromiseResult));
      });
  };

  const createStocks = () => {
    if (components) {
      return Object.keys(components).filter((quote) => (
        components[quote].industry === filter || filter === 'All')).map(
        (quote) => <Stock key={quote} ticker={quote} handleClick={getProfile} />,
      );
    }
    return [];
  };

  const changeFilter = (industry) => {
    dispatch(updateFilter(industry));
  };

  return (
    <>
      <IndustryFilter handleChange={changeFilter} />
      <table className="stocks">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Change</th>
          <th>Industry</th>
        </tr>
        {createStocks()}
      </table>
    </>
  );
};

export default Stocks;
