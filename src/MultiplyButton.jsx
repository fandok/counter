import { useDispatch } from "react-redux";
import { Button } from "reactstrap";

import { multiplyCount } from "./action/counter";

const MultiplyButton = () => {
  const dispatch = useDispatch();

  const handleMultiply = () => {
    dispatch(multiplyCount());
  };

  return <Button onClick={handleMultiply}>Multiply</Button>;
};

export default MultiplyButton;
