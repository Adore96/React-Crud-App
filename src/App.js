import React from 'react'
import HeaderComponent from "./components/HeaderComponent";
import UserComponent from "./components/UserComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddUserComponent from "./components/AddUserComponent";


function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>

                <div className="Container">
                    <Switch>
                        <Route path="/" exact component={UserComponent}/>
                        <Route path="/users" component={UserComponent}/>
                        <Route path="/add-user" component={AddUserComponent}/>
                    </Switch>
                </div>

                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
