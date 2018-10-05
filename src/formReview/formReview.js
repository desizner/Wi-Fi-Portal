import React, { Component } from 'react';
import './formReview.css';

class formReview extends Component {
  render() {
    return   <div className="">
				<h1 className="page-title">TELUS Public Wi-Fi issue reporting portal</h1>
				<hr/>
				<div className="shadow_wrapper">
				<h3>Review your submission</h3>
				<div className="form-group row">
					<div className="col-sm-6">
						<label className="control-label">Name</label>
						<span>this.state.fName</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Consent to reach customer</label>
						<span>Email & Phone</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Email</label>
						<span>mail@mail.com</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Phone</label>
						<span>+1-123-123-1234</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Wi-Fi SSID</label>
						<span>#TELUS</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Device Wi-Fi MAC Address</label>
						<span>00:ae:34:2f:6e:8b</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Company Name</label>
						<span>TELUS</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Company Phone Number</label>
						<span>+1-123-123-1234</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Address</label>
						<span>54, NSEZ Phase 2, Noida </span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Date & Time</label>
						<span>05/10/2018 03:15</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Device</label>
						<span>Laptop</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">OS Type</label>
						<span>Windows</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Issue Type</label>
						<span>Unable to see Wi-Fi network</span>
					</div>
					<div className="col-sm-12">
						<label className="control-label">Additional details</label>
						<span>Additional details will be here</span>
					</div>
				</div>
				<div className="">
					<button type="submit" className="btn btn-success">Submit</button> <button type="button" className="btn btn-default">Edit</button>
				</div>		
				</div>		
    		</div>
  }
}
export default formReview;