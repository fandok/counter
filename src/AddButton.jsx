import { useDispatch } from "react-redux";
import { Button } from "reactstrap";

import { addCount } from "./action/counter";

const AddButton = () => {
  // dispatch untuk menyambungkan dari button view ke action
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addCount());
  };

  return <Button onClick={handleAdd}>Add</Button>;
};

export default AddButton;
