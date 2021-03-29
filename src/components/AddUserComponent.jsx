import React, {Component} from 'react';

class AddUserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    changeFirstNamehandler = (event) => {
        this.setState({firstName: event.target.value});
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
                                    <label>First Name </label>
                                    <input type="text" placeholder="First Name" name="firstName"
                                           className="form-control"
                                           value={this.state.firstName} onChange={this.changeFirstNamehandler}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AddUserComponent;
