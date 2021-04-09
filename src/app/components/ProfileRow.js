import PropTypes from 'prop-types';

const ProfileRow = ({
  title1, data1, title2, data2,
}) => (
  <div className="row">
    <div className="cell">
      <div>{title1}</div>
      <div>{data1}</div>
    </div>
    <div className="cell">
      <div>{title2}</div>
      <div>{data2}</div>
    </div>
  </div>
);

ProfileRow.defaultProps = {
  data1: '',
  data2: '',
};

ProfileRow.propTypes = {
  title1: PropTypes.string.isRequired,
  data1: PropTypes.string,
  title2: PropTypes.string.isRequired,
  data2: PropTypes.string,
};

export default ProfileRow;
