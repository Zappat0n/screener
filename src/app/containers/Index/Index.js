import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Index = (props) => {
  const { ticker, handleClick } = props;
  const selectName = useSelector((state) => state.indexes[ticker].name);
  const selectPrice = useSelector((state) => state.indexes[ticker].price);
  const selectChange = useSelector((state) => state.indexes[ticker].changesPercentage);

  return (
    <button
      type="button"
      className="index"
      onClick={(event) => handleClick(event, ticker)}
    >
      {selectName}
      {' '}
      :
      {selectPrice}
      {' '}
      {selectChange}
      %
    </button>
  );
};

Index.propTypes = {
  ticker: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Index;
