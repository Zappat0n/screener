import { useSelector } from 'react-redux';

const Profile = () => {
  const data = useSelector((state) => (state.profile.data ? state.profile.data : ''));

  return (
    <h4>
      {data.companyName}
      :
      {data.price}
      {' '}
      {data.mktCap}
    </h4>
  );
};

export default Profile;
