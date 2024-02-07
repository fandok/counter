import { useDispatch } from "react-redux";
import { Button } from "reactstrap";

import { multiply } from "./redux/counterSlice";

const MultiplyButton = () => {
  const dispatch = useDispatch();

  const handleMultiply = () => {
    dispatch(multiply());
  };

  return <Button onClick={handleMultiply}>Multiply</Button>;
};

export default MultiplyButton;
