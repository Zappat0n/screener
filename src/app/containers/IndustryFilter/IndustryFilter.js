import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const IndustryFilter = (props) => {
  const { handleChange } = props;
  const stocks = useSelector((state) => state.stocks);
  const filters = ['All'];

  const createFilters = () => {
    Object.values(stocks).forEach((data) => {
      if (!filters.includes(data.industry)) {
        filters.push(data.industry);
      }
    });
  };
  createFilters();

  return (
    <div className="mt">
      <select
        className="industry-filter"
        onChange={(event) => handleChange(event.target.value)}
      >
        {filters.map((industry) => (
          <option key={industry} value={industry}>
            {industry}
          </option>
        ))}
      </select>
    </div>
  );
};

IndustryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default IndustryFilter;
