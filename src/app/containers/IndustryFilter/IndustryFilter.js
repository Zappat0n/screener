import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './IndustryFilter.css';

const IndustryFilter = (props) => {
  const { handleChange } = props;
  const stocks = useSelector((state) => state.stocks);
  const filters = ['All'];

  const createFilters = () => {
    Object.values(stocks).forEach((data) => {
      if (data.sector && !filters.includes(data.sector)) {
        filters.push(data.sector);
      }
    });
  };
  createFilters();

  return (
    <div className="filter">
      <div className="content">
        Sector:
        {'  '}
        <select
          className="industry-filter"
          onChange={(event) => handleChange(event.target.value)}
        >
          {filters.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

IndustryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default IndustryFilter;
