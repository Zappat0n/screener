import { useSelector } from 'react-redux';
import Index from '../Index/Index';

const Indexes = () => {
  const components = useSelector((state) => state.indexes);

  const createIndexes = () => {
    if (components) {
      return Object.keys(components).map(
        (ticker) => <Index key={ticker} ticker={ticker} />,
      );
    }
    return [];
  };

  return (
    <>
      {createIndexes()}
    </>
  );
};

export default Indexes;
