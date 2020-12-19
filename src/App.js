import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; //Makes easier routing different url:s to different react components
import "bootstrap/dist/css/bootstrap.min.css"; //Importing bootstrap to help with styling

//Importing the the files for the components
import Navbar from "./components/navbar.component";
import CreatePosts from "./components/post-list.component";
import CreateUser from "./components/create-user.component";
import FrontPage from "./components/front-page.component";

//Routing user to the correct component
//React router helps map speicific url paths to different components that will load in the browser
//container centers the application in the browser
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

//Exporting app
export default App;
