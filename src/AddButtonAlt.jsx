import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";

import { add } from "./redux/counterAltSlice";

const AddButtonAlt = () => {
  // dispatch untuk menyambungkan dari button view ke action
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  const handleAdd = () => {
    dispatch(add(count));
  };

  return <Button onClick={handleAdd}>Add</Button>;
};

export default AddButtonAlt;
