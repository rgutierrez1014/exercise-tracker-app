import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from "./components/NavbarComponent";
import ExerciseList from "./components/ExerciseListComponent";
import EditExercise from "./components/EditExerciseComponent";
import CreateExercise from "./components/CreateExerciseComponent";
import CreateUser from "./components/CreateUserComponent";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Navigation />
                <br />
                <Route path="/" exact component={ExerciseList} />
                <Route path="/edit/:id" component={EditExercise} />
                <Route path="/create" component={CreateExercise} />
                <Route path="/user" component={CreateUser} />
            </div>
        </BrowserRouter>
    );
}

export default App;
