import React, { Component, useDebugValue } from 'react';
import axios from 'axios';

export default class CreatePosts extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            content:'',
            usernames: [],
            users: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0){
                this.setState({
                    usernames: response.data.map(user => user.username),
                    username: response.data [0].username
                })
            }
        })

        axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0){
                this.setState({
                    users: response.data
                })
            }
        })
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

    

    onChangeContent(e){
        this.setState({
            content: e.target.value
        });
    }



    //Adding post to mongoDb database when pressing submit
    onSubmit(e) {
        e.preventDefault();
        const post = {
            username: this.state.username,
            content: this.state.content
        }
        this.state.users.forEach(element => {
            if (element.password ===  this.state.password && element.username === this.state.username){
                console.log(post);
                
                axios.post('http://localhost:5000/posts/add', post)
                .then(res => console.log(res.data));
                window.location = '/';
            } else {
                console.log('The post was unable to be added');
            }
        })

        this.setState({
            username: '',
            password: '',
            content: ''
        })
    }
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


