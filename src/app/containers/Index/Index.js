import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './Index.css';

const Index = (props) => {
  const { ticker } = props;
  const selectName = useSelector((state) => state.indexes[ticker].name);
  const selectPrice = useSelector((state) => state.indexes[ticker].price);
  const selectChange = useSelector((state) => state.indexes[ticker].changesPercentage);

  return (
    <div className="index">
      <button
        type="button"
      >
        {selectName}
        <div className={selectChange < 0 ? 'colorRed' : 'colorBlue'}>
          {selectPrice}
          {' '}
          {selectChange}
          %
        </div>
      </button>
    </div>
  );
};

Index.propTypes = {
  ticker: PropTypes.string.isRequired,
};

export default Index;
