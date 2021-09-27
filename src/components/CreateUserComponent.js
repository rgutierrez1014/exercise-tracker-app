import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap';
import axios from 'axios';


export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
        };
        console.log(newUser);

        axios.post(`/users/add`, newUser)
            .then(res => console.log(res.data));

        this.setState({
            username: ''
        })
    }
    
    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label>Username: </Label>
                        <Input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </FormGroup>
                    <br />
                    <Button type="submit" color="primary">Create User</Button>
                </Form>
            </div>
        )
    }
}