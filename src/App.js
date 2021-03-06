import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { store } from "./store";
import MainApp from './MainApp';

function App() {
  return (
    <Provider store={store}>
      <MainApp></MainApp>
    </Provider>
  );
}

export default App;
