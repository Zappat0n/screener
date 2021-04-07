import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './Stock.css';

const Stock = (props) => {
  const { ticker, handleClick } = props;
  const data = useSelector((state) => (state.stocks[ticker] ? state.stocks[ticker] : ''));

  const getPercentage = (change, price) => {
    if (price !== '') {
      return (change !== 0 ? `${(Math.round((change * 10000) / price) / 100)}%` : '0%');
    }
    return '';
  };

  const getColor = () => (data && data.changes < 0 ? 'colorRed' : 'colorBlue');

  return (
    <tr className="stock">
      <td>
        {data.companyName}
      </td>
      <td className={`price ${getColor()}`}>
        {data.price}
      </td>
      <td className={`change ${getColor()}`}>
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
