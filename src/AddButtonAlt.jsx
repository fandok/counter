import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";

import { addCountAlt } from "./action/counterAlt";

const AddButtonAlt = () => {
  // dispatch untuk menyambungkan dari button view ke action
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  const handleAdd = () => {
    dispatch(addCountAlt(count));
  };

  return <Button onClick={handleAdd}>Add</Button>;
};

export default AddButtonAlt;
