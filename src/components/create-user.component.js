import React, { Component } from 'react';
import axios from 'axios'; //Importing axios to be able to add users to database

//Building a constructor for the class
export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        //Binding methods to refer to the class
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //Starting state of the component and setting properties
        this.state = {
            username: '',
            password:'',
        }
    }

    //Updates the username property, 
    //target being the textbox and value being the value of the textbox
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    //Updates the password property
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }



    //Adding user to mongoDb database when pressing submit with axios
    onSubmit(e) {
        e.preventDefault();
        //Building a constructor for the user
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        //Alerts when a user is created
        alert('A user was created: ' + this.state.username);
        console.log(user);

        //Post request gets the route from the users route file and saves a user to the database
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
        
        //Sets the state back to empty
        this.setState({
            username: '',
            password: ''
        })
        //After a user is created, the user will be redirected to the create posts component
        window.location = '/post';
    }

    //Creating the component form code and rendering the create user component
    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <div className="jumbotron">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>
                                <strong>Username: </strong>
                                <weak>(Max 25 characters)</weak> 
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
                                <strong>Password: </strong>
                                <weak>(Max 25 characters)</weak> 
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