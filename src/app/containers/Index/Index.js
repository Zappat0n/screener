import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Index = (props) => {
  const { ticker } = props;
  const selectName = useSelector((state) => state.indexes[ticker].name);
  const selectPrice = useSelector((state) => state.indexes[ticker].price);
  const selectChange = useSelector((state) => state.indexes[ticker].changesPercentage);

  return (
    <h4>
      {selectName}
      {' '}
      :
      {selectPrice}
      {' '}
      {selectChange}
      %
    </h4>
  );
};

Index.propTypes = {
  ticker: PropTypes.string.isRequired,
};

export default Index;
