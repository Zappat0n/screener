import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Stock = (props) => {
  const { ticker, handleClick } = props;
  const data = useSelector((state) => (state.stocks[ticker] ? state.stocks[ticker] : ''));

  const getPercentage = (change, price) => {
    if (price !== '') {
      return (change !== 0 ? `${(Math.round((change * 10000) / price) / 100)}%` : '0%');
    }
    return '';
  };

  return (
    <tr>
      <td>
        {data.companyName}
      </td>
      <td>
        {data.price}
      </td>
      <td>
        {getPercentage(data.changes, data.price)}
      </td>
      <td>
        {data.industry}
      </td>
      <td>
        <button type="button" onClick={(event) => handleClick(event, ticker)}>*</button>
      </td>
    </tr>
  );
};

Stock.propTypes = {
  ticker: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Stock;
