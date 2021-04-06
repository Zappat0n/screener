import { useSelector } from 'react-redux';
import Stock from '../Stock/Stock';

const MainContainer = () => {
  const components = useSelector((state) => state.stocks);

  const createStocks = () => {
    if (components) {
      return Object.keys(components).map(
        (quote) => <Stock key={quote} ticker={quote} />,
      );
    }
    return [];
  };

  return (
    <>
      {createStocks()}
    </>
  );
};

export default MainContainer;
