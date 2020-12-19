import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //Allows to link to different routes

//Class navbar renders a navigation bar with help of bootstrap
//and links the user to a certain component via the navigationbar
export default class Navbar extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-dark bg-info navbar-expand">
                <Link to="/" className="navbar-brand">MicroBlog</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/user" className="nav-link">Create User</Link>     
                    </li>
                    <li className="navbar-item">
                    <Link to="/post" className="nav-link">Create Posts</Link>    
                    </li>
                </ul>    
                </div>
                
            </nav>
            
            
        );
        
    };

};