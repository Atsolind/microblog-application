import React, { Component } from 'react';
import axios from 'axios'; //Importing axios to get user posts from database

//Creating a functional react component that returns a table row
const Post = props => (
    <tr>
        <td>{props.post.username}</td>
        <td>{props.post.content}</td>
        <td>{props.post.createdAt.substring(0,10)}</td>
    </tr>
)
//Bulding constructor for the class and array for posts
export default class FrontPage extends Component {
    constructor(props){
        super(props);
        
        this.state = {posts: []};
    }

    //Get request gets the route from the posts route file and gets post data from the database
    //The data is set to the posts array
    componentDidMount(){
        axios.get('http://localhost:5000/posts/')
        .then(response => {
            this.setState({ posts: response.data })
        })

        .catch((error) => {
            console.log(error);
        })
    }

    //Method returns table rows
    postList(){
        return this.state.posts.map(currentpost => {
            return <Post post={currentpost}/>;
        })
    }
    //Creating the component form code and rendering the frontpage component
    //A table is going to be rendered
    //the table body calls postList method that returns the rows of the table
    render() {
        return (
            <div>
                <h3>MicroBlog Posts</h3>
                <h6>Create a user and start posting!</h6>
                <table className="table table-hover table-bordered table-striped table-light">
                    <thead className="thead-dark">
                        <tr>
                            <th>Username</th>
                            <th>Content</th>
                            <th>Posted</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.postList() }
                    </tbody>
                </table>
            </div>
        )
    }
}