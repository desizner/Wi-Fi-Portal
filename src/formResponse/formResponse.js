import React, { Component } from 'react';
import './formResponse.css';

class formResponse extends Component {
	render() {
		const formResponse = this.props;
		console.log(formResponse);
		return <div className="">
			<h1 className="page-title">TELUS Public Wi-Fi issue reporting portal</h1>
			<hr />
			<div className="shadow_wrapper">
				<h3>Your ticket has been accepted</h3>
				<h3>Your reference number is {formResponse}</h3>
				<div className="">
					<button type="submit" className="btn btn-success">Go to My TELUS</button>
				</div>
			</div>
		</div>
	}
}
export default formResponse;