import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Link, useParams } from 'react-router-dom';
import { refreshProfile, updateProfile } from '../../reducers/profileSlice';
import './Profile.css';
import ProfileRow from '../../components/ProfileRow';

const Profile = () => {
  const { id } = useParams();
  const data = useSelector((state) => (state.profile.data ? state.profile.data : ''));
  const index = useSelector((state) => state.stocks.index);
  const dispatch = useDispatch();

  const initialize = () => {
    dispatch(refreshProfile(id))
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        dispatch(updateProfile(originalPromiseResult));
      });
  };

  if (data.symbol !== id) {
    initialize();
  }

  const checkType = (data) => ((!data || typeof data === 'string') ? data : data.toString());

  return (
    <div className="profile">
      <div className="content">
        <Link key={index} to={`/index/${index || ''}`} className="link">
          Go Back
        </Link>
        <div className="top">
          <img className="logo" src={data.image} alt="logo" />
          <h2>
            {data.companyName}
          </h2>
          <h4>
            {data.price}
          </h4>
          <h5 className={data.changes < 0 ? 'colorRed' : 'colorBlue'}>
            {data.changes}
          </h5>
        </div>
        <div className="priceData">
          <ProfileRow title1="Previous close" data1={(Math.round((data.price - data.changes) * 100) / 100).toString()} title2="Market Cap" data2={checkType(data.mktCap)} />
          <ProfileRow title1="52 Week Range" data1={data.range} title2="Beta" data2={checkType(data.beta)} />
          <ProfileRow title1="Dividend Yield" data1={`${Math.round((data.lastDiv * 10000) / data.price) / 100}%`} title2="DCF" data2={checkType(data.dcf)} />
          <ProfileRow title1="Exchange" data1={data.exchangeShortName} title2="Country" data2={data.country} />
        </div>
        <div className="info">
          <h3>Company Information</h3>
          <ProfileRow title1="Sector:" data1={data.sector} title2="Industry:" data2={data.industry} />
          <h4>CEO</h4>
          <p>{data.ceo}</p>
          <h4>Website</h4>
          <p>{data.website}</p>
          <h4>Description</h4>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
