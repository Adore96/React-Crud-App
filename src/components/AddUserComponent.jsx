import React, {Component} from 'react';
import UserService from "../services/UserService";

class AddUserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            telephone: ''
        }

        //binding eventHandler to the Component.
        this.changeUsernamehandler = this.changeUsernamehandler.bind(this);
        this.changeEmailhandler = this.changeEmailhandler.bind(this);
        this.changePasswordhandler = this.changePasswordhandler.bind(this);
        this.changeTelephonehandler = this.changeTelephonehandler.bind(this);
    }

    saveUser = (event) => {
        event.preventDefault();
        let user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            telephone: this.state.telephone
        };
        console.log('User => ' + JSON.stringify(user));

        UserService.addUser(user).then(res => {
            this.props.history.push('/users');
        });
    }

    changeUsernamehandler = (event) => {
        this.setState({username: event.target.value});
    }
    changeEmailhandler = (event) => {
        this.setState({email: event.target.value});
    }
    changePasswordhandler = (event) => {
        this.setState({password: event.target.value});
    }
    changeTelephonehandler = (event) => {
        this.setState({telephone: event.target.value});
    }

    cancel() {
        this.props.history.push('/users');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">User Signup Page</h3>
                        <div className="card-body">
                            <form action="signup">
                                <div className="form-group">
                                    <label>User Name </label>
                                    <input type="text" placeholder="User Name" name="userName"
                                           className="form-control"
                                           value={this.state.username} onChange={this.changeUsernamehandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Email </label>
                                    <input type="text" placeholder="Email" name="email"
                                           className="form-control"
                                           value={this.state.email} onChange={this.changeEmailhandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Password </label>
                                    <input type="text" placeholder="Password" name="password"
                                           className="form-control"
                                           value={this.state.password} onChange={this.changePasswordhandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Telephone </label>
                                    <input type="text" placeholder="Telephone Number" name="telephone"
                                           className="form-control"
                                           value={this.state.telephone} onChange={this.changeTelephonehandler}/>
                                </div>
                                <button className="Btn btn-success" onClick={this.saveUser}>Save</button>
                                <button className="Btn btn-danger" onClick={this.cancel.bind(this)}
                                        style={{marginLeft: "10px"}}>Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUserComponent;
