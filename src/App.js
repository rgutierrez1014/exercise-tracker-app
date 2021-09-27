import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from "./components/NavbarComponent";
import ExerciseList from "./components/ExerciseListComponent";
import EditExercise from "./components/EditExerciseComponent";
import CreateExercise from "./components/CreateExerciseComponent";
import CreateUser from "./components/CreateUserComponent";
import Report from './components/ReportComponent';


function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <div className="container">
                <Route path="/" exact component={ExerciseList} />
                <Route path="/edit/:id" component={EditExercise} />
                <Route path="/create" component={CreateExercise} />
                <Route path="/user" component={CreateUser} />
                <Route path="/report" component={Report} />
            </div>
        </BrowserRouter>
    );
}

export default App;
