import React, { Component } from 'react';
import axios from 'axios';

const Post = props => (
    <tr>
        <td>{props.post.username}</td>
        <td>{props.post.content}</td>
        <td>{props.post.createdAt.substring(0,10)}</td>
    </tr>
)

export default class FrontPage extends Component {
    constructor(props){
        super(props);
        
        this.state = {posts: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/posts/')
        .then(response => {
            this.setState({ posts: response.data })
        })

        .catch((error) => {
            console.log(error);
        })
    }


    postList(){
        return this.state.posts.map(currentpost => {
            return <Post post={currentpost}/>;
        })
    }
    
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