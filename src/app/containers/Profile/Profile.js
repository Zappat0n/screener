import { useDispatch, useSelector } from 'react-redux';
import { updateVisible } from '../../reducers/filterSlice';

const Profile = () => {
  const data = useSelector((state) => (state.profile.data ? state.profile.data : ''));
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={`profile ${filter.stocksVisible ? 'dNone' : 'dFlex'}`}>
      <button type="button" onClick={() => dispatch(updateVisible())}>
        Go Back
      </button>
      <p>
        Name:
        {data.companyName}
      </p>
      <p>
        Price:
        {data.price}
      </p>
      <p>
        Industry:
        {data.industry}
      </p>
      <p>
        Market Cap:
        {data.mktCap}
      </p>
    </div>
  );
};

export default Profile;
