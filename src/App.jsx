import { useSelector } from "react-redux";

import AddButton from "./AddButton";
import AddButtonAlt from "./AddButtonAlt";
import MultiplyButton from "./MultiplyButton";
import ResetButton from "./ResetButton";

const App = () => {
  // memanggil count dari redux
  const count = useSelector((state) => state.counter.count);
  // manggil count alternatif dari redux
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
      <AddButtonAlt />
    </div>
  );
};

export default App;
