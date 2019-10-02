import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store";
import PetsContainer from "./PetsContainer";
import "./styles.css";

function App() {
  return (
    <Provider store={Store}>
      <PetsContainer />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
