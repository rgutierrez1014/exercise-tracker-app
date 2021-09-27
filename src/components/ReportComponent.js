import React, { Component } from 'react';
import axios from 'axios';

import ExerciseOverTime from './graphs/ExerciseOverTimeComponent';


export default class Report extends Component {
    constructor(props) {
        super(props);
        this.state = { exercises: [] };
    }

    // componentDidMount() {
    //     axios.get(`/exercises/`)
    //         .then(response => {
    //             this.setState({ exercises: response.data });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    render() {
        return (
            <div>
                <h3>Exercises for Robert</h3>
                <div style={{width: '85%'}}>
                    <ExerciseOverTime 
                        name="exercise-over-time"
                    />
                </div>
            </div>
        )
    }
}