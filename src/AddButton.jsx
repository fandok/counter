import { useDispatch } from "react-redux";
import { Button } from "reactstrap";

import { add } from "./redux/counterSlice";

const AddButton = () => {
  // dispatch untuk menyambungkan dari button view ke action
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add());
  };

  return <Button onClick={handleAdd}>Add</Button>;
};

export default AddButton;
