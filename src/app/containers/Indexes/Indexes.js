import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Index from '../Index/Index';
import './Indexes.css';

const Indexes = () => {
  const components = useSelector((state) => state.indexes);

  const createIndexes = () => {
    if (components) {
      return Object.keys(components).map(
        (ticker) => (
          <Link key={ticker} to={`/index/${ticker}`} className="link">
            <Index ticker={ticker} />
          </Link>
        ),
      );
    }
    return [];
  };

  return (
    <div className="indexes">
      {createIndexes()}
    </div>
  );
};

export default Indexes;
