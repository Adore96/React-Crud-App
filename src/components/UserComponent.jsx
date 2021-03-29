import React from 'react';
import userService from "../services/UserService";

class UserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        //then refers with a JS Promise
        userService.getUsers().then((response) => {
            this.setState({users: response.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Users List</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>

                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>

                                </tr>
                        )
                    }
                    </tbody>

                </table>
            </div>
        );
    }
}

export default UserComponent;
