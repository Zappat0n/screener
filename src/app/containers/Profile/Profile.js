import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Link, useParams } from 'react-router-dom';
import { updateVisible } from '../../reducers/filterSlice';
import { refreshProfile, updateProfile } from '../../reducers/profileSlice';
import './Profile.css';

const Profile = () => {
  const { id } = useParams();
  const data = useSelector((state) => (state.profile.data ? state.profile.data : ''));
  const index = useSelector((state) => state.stocks.index);
  const dispatch = useDispatch();

  const initialize = () => {
    dispatch(updateVisible());
    dispatch(refreshProfile(id))
      .then(unwrapResult)
      .then((originalPromiseResult) => {
        dispatch(updateProfile(originalPromiseResult));
      });
  };

  if (data.symbol !== id) {
    initialize();
  }

  return (
    <div className="profile">
      <div className="content">
        <Link key={index} to={`/index/${index}`} className="link">
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
          <div className="row">
            <div className="cell">
              <div>Previous close</div>
              <div>
                {Math.round((data.price - data.changes) * 100) / 100}
              </div>
            </div>
            <div className="cell">
              <div>Market Cap</div>
              <div>{data.mktCap}</div>
            </div>
          </div>
          <div className="row">
            <div className="cell">
              <div>52 Week Range</div>
              <div>
                {data.range}
              </div>
            </div>
            <div className="cell">
              <div>Beta</div>
              <div>{data.beta}</div>
            </div>
          </div>
          <div className="row">
            <div className="cell">
              <div>Dividend Yield</div>
              <div>
                {`${Math.round((data.lastDiv * 10000) / data.price) / 100}%`}
              </div>
            </div>
            <div className="cell">
              <div>DCF</div>
              <div>{data.dcf}</div>
            </div>
          </div>
          <div className="row">
            <div className="cell">
              <div>Exchange</div>
              <div>
                {data.exchangeShortName}
              </div>
            </div>
            <div className="cell">
              <div>Country</div>
              <div>{data.country}</div>
            </div>
          </div>
        </div>
        <div className="info">
          <h3>Company Information</h3>
          <div className="row">
            <div className="cell">
              <div>Sector:</div>
              <div>
                {data.sector}
              </div>
            </div>
            <div className="cell">
              <div>Industry:</div>
              <div>{data.industry}</div>
            </div>
          </div>
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
