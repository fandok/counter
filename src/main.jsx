import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Provider ini untuk menyambungkan aplikasi dengan redux, dengan store sebagai tempat penyimpanan-nya
  <Provider store={store}>
    <App />
  </Provider>,
);
