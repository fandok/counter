import { useDispatch } from "react-redux";
import { Button } from "reactstrap";

import { reset } from "./redux/counterSlice";

const ResetButton = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
  };

  return <Button onClick={handleReset}>Reset</Button>;
};

export default ResetButton;
