import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar.component"
import ExerciseList from "./components/ExerciseList.component"
import EditExercise from "./components/EditExercise.component"
import CreateExercise from "./components/CreateExercise.component"
import CreateUser from "./components/CreateUser.component"

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br />
      <Route exact path="/">
            <ExerciseList/>  
      </Route>
      <Route  path="/edit/:id">
            <EditExercise/>   
      </Route>
      <Route  path="/create">
             <CreateExercise/>   
      </Route>
      <Route  path="/user">
             <CreateUser/>   
        </Route>
        </div>
    </Router>
    
  );
}

export default App;
