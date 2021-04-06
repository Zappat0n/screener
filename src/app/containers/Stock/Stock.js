import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Index = (props) => {
  const { ticker, handleClick } = props;
  const selectName = useSelector((state) => state.stocks[ticker].name);
  const selectPrice = useSelector((state) => state.stocks[ticker].price);
  const selectChange = useSelector((state) => state.stocks[ticker].changesPercentage);

  return (
    <button type="button" onClick={(event) => handleClick(event, ticker)}>
      {selectName}
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
