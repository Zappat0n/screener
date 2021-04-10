import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import Stock from '../Stock/Stock';
import IndustryFilter from '../IndustryFilter/IndustryFilter';
import { updateFilter } from '../../reducers/filterSlice';
import {
  clearStocks, refreshStocks, setIndex, updateStocks,
} from '../../reducers/stockSlice';
import indexComponents from '../../data/components';

import './Stocks.css';

const Stocks = () => {
  const { id } = useParams();
  const components = useSelector((state) => state.stocks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const initialize = () => {
    dispatch(updateFilter('All'));
    dispatch(clearStocks());
    dispatch(setIndex(id));
    dispatch(refreshStocks(indexComponents[id].join(',')))
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        dispatch(updateStocks(originalPromiseResult));
      });
  };

  if (components.index !== id) {
    initialize();
  }

  const createStocks = () => {
    if (components) {
      return Object.keys(components).filter((quote) => (
        (components[quote].sector === filter.value || filter.value === 'All')) && quote !== 'index').map(
        (quote) => <Stock key={quote} ticker={quote} />,
      );
    }
    return [];
  };

  const changeFilter = (sector) => {
    dispatch(updateFilter(sector));
  };

  return (
    <>
      <div className="stocks">
        <IndustryFilter handleChange={changeFilter} />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>Sector</th>
            </tr>
          </thead>
          <tbody>
            {createStocks()}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Stocks;
