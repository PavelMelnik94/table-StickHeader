import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import "./components/Table/addons/synchscroll"; // sych divs

import URL from "./api";

ReactDOM.render(<App dataUrl={URL} />, document.getElementById("root"));
