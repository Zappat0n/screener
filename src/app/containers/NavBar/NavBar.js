import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { refreshIndexes, updateIndexes } from '../../reducers/indexSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  const indexes = useSelector((state) => state.indexes);

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
    </>
  );
};

export default NavBar;
