import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../css/Login.css"

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }

    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">

                    </div>
                    <div className="col-sm-8">
                        <br/>
                        <Form>
                            <h2 className="text-center">Login Form</h2>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>
<br/>
                    </div>
                    <div className="col-sm-2">

                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;
