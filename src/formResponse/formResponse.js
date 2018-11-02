import React, { Component } from 'react';
import './formResponse.css';

class formResponse extends Component {
	render() {
		const {formResponse} = this.props;
		const newsuccessData = formResponse.replace(/\s*\n\s*/g,",");
		const arrayTextData=newsuccessData.split(',');
		const ticketValue= arrayTextData[1].substring(arrayTextData[1].indexOf(":")+1);
		const ticketNumber = ticketValue.match(/\d+/g).map(Number);
		console.log(ticketValue);
		console.log(ticketNumber);
		return <div className="">
			<h1 className="page-title">TELUS Public Wi-Fi issue reporting portal</h1>
			<hr />
			<div className="shadow_wrapper">
				<h3>Your ticket has been accepted</h3>
				<h3>Your reference number is {ticketNumber}</h3>
				<div className="">
					<button type="submit" className="btn btn-success">Go to My TELUS</button>
				</div>
			</div>
		</div>
	}
}
export default formResponse;