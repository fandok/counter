import { useSelector } from "react-redux";

import AddButton from "./AddButton";
import MultiplyButton from "./MultiplyButton";
import ResetButton from "./ResetButton";

const App = () => {
  // memanggil count dari redux
  const count = useSelector((state) => state.counter.count);

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
    </div>
  );
};

export default App;
