import { useSelector } from 'react-redux';

const Profile = () => {
  const data = useSelector((state) => (state.profile.data ? state.profile.data : ''));

  return (
    <>
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
    </>
  );
};

export default Profile;
