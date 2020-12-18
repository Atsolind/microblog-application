import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password:'',
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }



    //Adding user to mongoDb database when pressing submit
    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }
        alert('A user was created: ' + this.state.username);
        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
            password: ''
        })

        window.location = '/post';
    }
    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <div className="jumbotron">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>
                                <strong>Username:</strong> 
                            </label>
                            <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                <strong>Password:</strong> 
                            </label>
                            <input type="text"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create User" className="btn btn-dark" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}