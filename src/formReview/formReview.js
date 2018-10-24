import React, { Component } from 'react';
import './formReview.css';
import axios from 'axios';

class formReview extends Component {
	
	  createTicket = event => {
		event.preventDefault();
	
		// const ticketData = {
		// 	Requestor: this.props.formData.name,
		// };
		const ticketData = 'id: ticket/new\n' +
		'queue: General\n' +
		'Requestor: '+this.props.formData.email+'\n'+
		'Priority: 4\n' +
		'CF-Name: '+this.props.formData.name+'\n'+
		'CF-Phone: '+this.props.formData.name+'\n'+
		'CF-SSID: '+this.props.formData.name+'\n'+
		'CF-bssid: '+this.props.formData.name+'\n'+
		'CF-Address: '+this.props.formData.name+'\n'+
		'CF-Business Phone: '+this.props.formData.name+'\n'+
		'CF-City: '+this.props.formData.name+'\n'+
		'CF-Location: '+this.props.formData.name+'\n'+
		'CF-Province: '+this.props.formData.name+'\n'+
		'CF-Contact Consent: '+this.props.formData.name+''+this.props.formData.name+'\n'+
		'CF-Device: '+this.props.formData.name+'\n'+
		'CF-OS Type: '+this.props.formData.name+'\n'+
		'Subject: '+this.props.formData.name+'\n'+
		'Text: '+this.props.formData.name+'\n';
		console.log(ticketData);
		//console.log(ticketSubmit);
		axios.post(`http://10.5.3.20:8080/REST/1.0/ticket/new?user=root&pass=password`, { ticketData })
		  .then(res => {
			//console.log(res);
			//console.log(res.data);
			const ticketResponse = res.data;
			this.props.callbackResponse(ticketResponse);
			//console.log(ticketResponse);
		  })
	  }
	  editTicket = event => {
		event.preventDefault();
		const ticketEdit = '';
		this.props.callbackTicketEdit(ticketEdit);
	  }
	render() {
		const formData = this.props;
		return <div className="">
			<h1 className="page-title">TELUS Public Wi-Fi issue reporting portal</h1>
			<hr />
			<div className="shadow_wrapper">
				<h3>Review your submission</h3>
				<form onSubmit={this.createTicket}>
				<div className="form-group row">
					<div className="col-sm-6">
						<label className="control-label">Name</label>
						<span>{this.props.formData.name}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Consent to reach customer</label>
						<span>Email & Phone</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Email</label>
						<span>{this.props.formData.email}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Phone</label>
						<span>{this.props.formData.phone}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Wi-Fi SSID</label>
						<span>{this.props.formData.ssid_select}{this.props.formData.other_ssid_details}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Device Wi-Fi MAC Address</label>
						<span>{this.props.formData.mac_address}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Company Name</label>
						<span>{this.props.formData.company_name}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Company Phone Number</label>
						<span>{this.props.formData.company_phone}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Address</label>
						<span>{this.props.formData.address} {this.props.formData.city} {this.props.formData.province}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Date & Time</label>
						<span>{this.props.formData.date} {this.props.formData.time}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Device</label>
						<span>{this.props.formData.device_os}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">OS Type</label>
						<span>{this.props.formData.device_os}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Issue Type</label>
						<span>{this.props.formData.issue} {this.props.formData.other_issue}</span>
					</div>
					<div className="col-sm-12">
						<label className="control-label">Additional details</label>
						<span>{this.props.formData.additional_details}</span>
					</div>
				</div>
				<div className="">
					<button type="submit" className="btn btn-success" >Submit</button> <button type="button" onClick={this.editTicket} className="btn btn-default">Edit</button>
				</div>
				</form>
			</div>
		</div>
	}
}
export default formReview;