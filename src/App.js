import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import CreatePosts from "./components/post-list.component";
import CreateUser from "./components/create-user.component";
import FrontPage from "./components/front-page.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={FrontPage} />
        <Route path="/user" exact component={CreateUser} />
        <Route path="/post" exact component={CreatePosts} />
      </div>
    </Router>
  );
}

export default App;
