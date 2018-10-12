import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './login.css';

class login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			userNmae: "",
			password: "",
		};
	}

	validateForm() {
		return this.state.userNmae.length > 0 && this.state.password.length > 0;
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
	}

	render() {
		return (
			<div className="Login">
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId="userNmae" bsSize="large">
						<ControlLabel>User Name</ControlLabel>
						<FormControl
							autoFocus
							type="text"
							value={this.state.userNmae}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup controlId="password" bsSize="large">
						<ControlLabel>Password</ControlLabel>
						<FormControl
							value={this.state.password}
							onChange={this.handleChange}
							type="password"
						/>
					</FormGroup>
					<Button
						block
						bsSize="large"
						disabled={!this.validateForm()}
						type="submit"
					>
						Login
          </Button>
				</form>
			</div>
		)
	}
}

export default login;