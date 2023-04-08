// functions starting with "use" are called hooks
//which can be used inside only a functional component
 //we have this option to make aliases using 'as'
import React from 'react';
// Importing components from a third-party library
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// importing css
import './App.css';

//importing components
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';


function App() {
  
  
  // All of this converted to React.createElement(...)
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>
        <Route path='/places/new'>
          <NewPlace />
        </Route>
        <Redirect to='/'/>
      </Switch>
     
    </Router>
  )
  };
export default App;

/*
Q: What does Router do:
A: Well this is what helps in page loading
N: Route can only be set inside a 'Router component'
Q: What is path in Route component?
A: Path" is what should be entered after the main website 
i.e after root
Q: When will any Route component be rendered?
A: When path attribute is same as URL
Q: How does switch work?
A: Just like any programming switch: once it executes its matching path
it won't execute the remaining lines 
*/

