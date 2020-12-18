import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

