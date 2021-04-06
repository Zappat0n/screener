import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux";
import { refreshIndexes, updateIndexes } from '../../reducers/indexSlice'

const NavBar = () => {
  const dispatch = useDispatch();


  return (
    <>
      <button type="button" onClick={() => dispatch(refreshIndexes("index"))
        .then(unwrapResult)
        .then(originalPromiseResult => {
          dispatch(updateIndexes(originalPromiseResult));
        })
      }>Refresh</button>
    </>
  );
}

export default NavBar;
