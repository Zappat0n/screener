import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import Index from '../Index/Index';
import { refreshIndexes, updateIndexes } from '../../reducers/indexSlice';
import './Indexes.css';

const Indexes = () => {
  const indexes = useSelector((state) => state.indexes);
  const components = useSelector((state) => state.indexes);
  const dispatch = useDispatch();

  if (indexes.GSPC.price === '') {
    dispatch(refreshIndexes(Object.keys(indexes).map((value) => `^${value}`).join(',')))
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        dispatch(updateIndexes(originalPromiseResult));
      });
  }

  const createIndexes = () => {
    if (components) {
      return Object.keys(components).map(
        (ticker) => (
          <Link key={ticker} to={`/index/${ticker}`} className="link">
            <Index ticker={ticker} />
          </Link>
        ),
      );
    }
    return [];
  };

  return (
    <div className="indexes">
      {createIndexes()}
    </div>
  );
};

export default Indexes;
