import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Stock.css';

const Stock = (props) => {
  const { ticker } = props;
  const data = useSelector((state) => (state.stocks[ticker] ? state.stocks[ticker] : ''));

  const getPercentage = (change, price) => {
    if (price !== '') {
      return (change !== 0 ? `${(Math.round((change * 10000) / price) / 100)}%` : '0%');
    }
    return '';
  };

  const getColor = () => (data && data.changes < 0 ? 'colorRed' : 'colorBlue');

  const getCell = (text) => (
    <Link key={ticker} to={`/stock/${ticker}`} className="link">
      {text}
    </Link>
  );

  return (
    <tr className="stock">
      <td>
        {getCell(data.companyName)}
      </td>
      <td>
        {getCell(data.price)}
      </td>
      <td className={`change ${getColor()}`}>
        {getCell(getPercentage(data.changes, data.price))}
      </td>
      <td>
        {getCell(data.sector)}
      </td>
    </tr>
  );
};

Stock.propTypes = {
  ticker: PropTypes.string.isRequired,
};

export default Stock;
