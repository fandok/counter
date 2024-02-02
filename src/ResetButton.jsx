import { useDispatch } from "react-redux";
import { Button } from "reactstrap";

import { resetCount } from "./action/counter";

const ResetButton = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetCount());
  };

  return <Button onClick={handleReset}>Reset</Button>;
};

export default ResetButton;
