import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";

import AddButton from "./AddButton";
import MultiplyButton from "./MultiplyButton";
import ResetButton from "./ResetButton";
import { addCountAlt } from "./action/counterAlt";

const App = () => {
  const dispatch = useDispatch();

  // memanggil count dari redux
  const count = useSelector((state) => state.counter.count);
  const countAlt = useSelector((state) => state.counterAlt.count);

  return (
    <div style={{ marginTop: "18vw", textAlign: "center" }}>
      <h1>Counter Example</h1>
      <h2>{count}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
        }}
      >
        <AddButton />
        <MultiplyButton />
        <ResetButton />
      </div>
      <h2>{countAlt}</h2>
      <Button
        onClick={() => {
          dispatch(addCountAlt(count));
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default App;
