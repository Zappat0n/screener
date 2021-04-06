import { useSelector } from "react-redux";

const Index = (props) => {
  const { ticker } = props;
  const selectName = useSelector(state => {
    return state.indexes[ticker].name;
  });
  const selectPrice = useSelector(state => state.indexes[ticker].price);
  const selectChange = useSelector(state => state.indexes[ticker].changesPercentage);

  return (
    <h4>
      {selectName} : {selectPrice} {selectChange}%
    </h4>
  );
}

export default Index;
