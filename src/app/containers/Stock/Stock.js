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

  const getCell = (text) => (
    <div
      className="cell"
      onClick={(event) => handleClick(event, ticker)}
      onKeyPress={(event) => handleClick(event, ticker)}
      role="presentation"
    >
      {text}
    </div>
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
        {getCell(data.industry)}
      </td>
    </tr>
  );
};

Stock.propTypes = {
  ticker: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Stock;
