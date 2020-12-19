import React, { Component, useDebugValue } from 'react';
import axios from 'axios'; //Importing axios to be able to add posts to database

//Building a constructor for the class
export default class CreatePosts extends Component {
    constructor(props) {
        super(props);

        //Binding methods to refer to the class
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //Starting state of the component and setting properties
        this.state = {
            username: '',
            password: '',
            content:'',
            usernames: [],
            users: []
        }
    }

    //Method will be called right before anything is displayed in the browser
    //Get request gets the route from the users route file and gets user data from the database
    componentDidMount(){
        //Gets usernames from database and displayes them in the dropdown menu
        axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0){
                this.setState({
                    usernames: response.data.map(user => user.username),
                    username: response.data [0].username
                })
            }
        })
        //Gets usernames and passwords from the database to check if user inputs are correct
        axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0){
                this.setState({
                    users: response.data
                })
            }
        })
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
    //Updates the content property
    onChangeContent(e){
        this.setState({
            content: e.target.value
        });
    }



    //Adding post to mongoDb database when pressing submit
    onSubmit(e) {
        e.preventDefault();
        //Building a contructor for the posts
        const post = {
            username: this.state.username,
            content: this.state.content
        }
        //If the users credentials match the on in database, the post will be added to the database
        this.state.users.forEach(element => {
            if (element.password ===  this.state.password && element.username === this.state.username){
                console.log(post);
                
                axios.post('http://localhost:5000/posts/add', post)
                .then(res => console.log(res.data));
                window.location = '/'; //Takes user to the frontpage
            } else {
                console.log('The post was unable to be added'); //Console logs error if password wrong or content too big
            }
        })
        //Setting the state back to empty after user has submitted post
        this.setState({
            username: '',
            password: '',
            content: ''
        })
    }

    //Creating the component form code and rendering the create posts component
    //Select option gets usernames from the usernames array
    //For each user in the array the select box will give an option
    render() {
        return (
            <div>
                <h4>Select your Username and create a Post!</h4>
                <div className="jumbotron">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>
                                <strong>Username:</strong> 
                            </label>
                            <select ref="userInput"
                            required
                            readonly
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                                {
                                    this.state.usernames.map(function(user) {
                                        return <option
                                        key={user}
                                        value={user}>{user}
                                        </option>;
                                    })
                                }
                            </select>
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
                            <label>
                                <strong>Content: </strong>
                                <weak>(Max 300 characters)</weak>
                            </label>
                            <textarea type="text"
                            rows="3"
                            required
                            className="form-control"
                            value={this.state.content}
                            onChange={this.onChangeContent}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Submit Post" className="btn btn-dark" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


