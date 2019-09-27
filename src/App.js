import React from "react";
import AppRouter from "./AppRouter.js";
import { createBrowserHistory } from "history";
import "./App.css";

function App() {
  const history = createBrowserHistory();
  return <AppRouter history={history}></AppRouter>;
}

export default App;
