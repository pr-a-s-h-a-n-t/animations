import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CaseOne from "../src/component/new";
import ReducerHook from "./component/Reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CaseOne /> */}
    <ReducerHook />
  </React.StrictMode>
);
