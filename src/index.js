import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from "./App";

ReactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    , document.getElementById("root")
);
