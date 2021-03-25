import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import UserComponent from "./components/UserComponent";

ReactDom.render(
    <UserComponent/>, document.getElementById("root")
);
