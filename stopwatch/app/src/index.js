import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FetchData from './FetchData';
 import StarProb from "./component/StarProb";
import CheckboxSelect from "./component/CheckboxSelect";
import ApiCall from "./component/ApiCall/ApiCall";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FetchData /> */}
    {/* <StarProb /> */}
    {/* <CheckboxSelect /> */}
    <ApiCall />
  </React.StrictMode>
);

 
