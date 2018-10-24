import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Row, Col, Checkbox } from "react-bootstrap";
import './form.css';
import axios from 'axios';

class form extends Component {
	constructor(props) {
		super(props);
		//this.textInput = React.createRef();
		this.state = {
			fName: '',
			lName: '',
			email: '',
			phone: '',
			ssid_select: '',
			other_ssid_details: '',
			mac_address: '',
			company_name: '',
			company_phone: '',
			address: '',
			city: '',
			province: '',
			date: '',
			time_hh: '',
			time_mm: '',
			device_os: '',
			issue: '',
			other_issue: '',
			additional_details: '',
			errors: {},
			ssid_select_show: false,
			ssid_select_Tpasspoint: false,
			issue_type_other:false,
			consentEmail: true,
			consentPhone :true,
			errorClass : 'has-error',
			defaultClass : '',
			formIsValid : true,
			formReviewWrap : false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleValidation() {
		let fName = this.state.fName;
		let lName = this.state.lName;
		let email = this.state.email;
		let phone = this.state.phone;
		let ssid_select = this.state.ssid_select;
		let other_ssid_details = this.state.other_ssid_details;
		let mac_address = this.state.mac_address;
		let company_name = this.state.company_name;
		let city = this.state.city;
		let province = this.state.province;
		let date = this.state.date;
		let issue = this.state.issue;
		let other_issue = this.state.other_issue;
		let consentEmail = this.state.consentEmail;
		let consentPhone = this.state.consentPhone;
		let errors = {};
		let isFormValid = true;
		
		//Name
		if (!fName) {
			errors["fName"] = "Enter your first name";
			this.setState({
				formIsValid : false
			});
			isFormValid = false;
		}
		// if(typeof fName !== "undefined"){
		//   if(!fName.match(/^[a-zA-Z]+$/)){
		// 	formIsValid = false;
		// 	errors["fName"] = "Only letters";
		//   }      	
		// }
		if (!lName) {
			errors["lName"] = "Enter your last name";
			isFormValid = false;
		}
		if (!phone) {
			errors["phone"] = "Enter phone number";
			isFormValid = false;
		}
		if (!ssid_select) {
			errors["ssid_select"] = "Please select Wi-Fi Network Name or SSID";
			isFormValid = false;
		}

		if (ssid_select === 'Other') {
			if (!other_ssid_details) {
				errors["other_ssid_details"] = "Please enter other SSID details";
				isFormValid = false;
			}
		} else {}
	

		//Email
		if (!email) {
			errors["email"] = "Cannot be empty";
			isFormValid = false;
		}

		if (typeof email !== "undefined") {
			let lastAtPos = email.lastIndexOf('@');
			let lastDotPos = email.lastIndexOf('.');

			if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
				errors["email"] = "Email is not valid";
				isFormValid = false;
			}

		}

		if (!mac_address) {
			errors["mac_address"] = "Enter MAC address";
			isFormValid = false;
		}

		if (!company_name) {
			errors["company_name"] = "Enter company address";
			isFormValid = false;
		}

		if (!city) {
			errors["city"] = "Enter city";
			isFormValid = false;
		}

		if (!province) {
			errors["province"] = "Select province";
			isFormValid = false;
		}

		if (!date) {
			errors["date"] = "Enter date";
			isFormValid = false;
		}


		if (!issue) {
			errors["issue"] = "Select issue type";
			isFormValid = false;
		}
		if (issue === 'Others') {
			if (!other_issue) {
				errors["other_issue"] = "Provide other issue details";
				isFormValid = false;
			}
		} else {}

		if ((!consentEmail) || (!consentPhone)) {
			errors["consent_check"] = "Please select at least one option to contact you by TELUS.";
			isFormValid = false;
		} 
		

		this.setState({ errors: errors });
		return isFormValid;
	}

	handleInputChange(event, field) {
		
		this.setState({
			[event.target.name]: event.target.value
		});

		if (event.target.type === 'checkbox')  {
			this.setState({
				[event.target.name ]: event.target.checked
			});
		} else {}

		if (event.target.name === 'ssid_select') {
			if (event.target.value === 'Other') {
				this.setState({
					ssid_select_show: true
				});
			} else {
				this.setState({
					ssid_select_show: false
				});
			}
			if (event.target.value === 'TELUSPasspoint') {
				this.setState({
					ssid_select_Tpasspoint: true
				});
			} else {
				this.setState({
					ssid_select_Tpasspoint: false
				});
			}
		}
		if (event.target.name === 'issue') {
			if (event.target.value === 'Others') {
				this.setState({
					issue_type_other: true
				});
			} else {
				this.setState({
					issue_type_other: false
				});
			}
		}
		this.handleValidation();
	}

	handleSubmit(event) {
		event.preventDefault();
		if (  this.handleValidation() ) {
			
			this.setState({
				formReviewWrap: true,
			  });
			//this.props.callbackParent(data);
		} else {
			alert("Form has errors.");
			//this.textInput.current.focus();
		}
	}

	createTicket = event => {
		event.preventDefault();
		const ticketData = 'id: ticket/new\n' +
		'queue: General\n' +
		'Requestor: '+this.state.email+'\n'+
		'Priority: 4\n' +
		'CF-Name: '+this.state.fName+'\n'+
		'CF-Phone: '+this.state.phone+'\n'+
		'CF-SSID: '+this.state.ssid_select+'\n'+
		'CF-bssid: '+this.state.fName+'\n'+
		'CF-Address: '+this.state.fName+'\n'+
		'CF-Business Phone: '+this.state.fName+'\n'+
		'CF-City: '+this.state.fName+'\n'+
		'CF-Location: '+this.state.fName+'\n'+
		'CF-Province: '+this.state.fName+'\n'+
		'CF-Contact Consent: '+this.state.fName+''+this.state.fName+'\n'+
		'CF-Device: '+this.state.fName+'\n'+
		'CF-OS Type: '+this.state.fName+'\n'+
		'Subject: '+this.state.fName+'\n'+
		'Text: '+this.state.fName+'\n';
		debugger;
		const encodedData = encodeURIComponent(ticketData);
		console.log(encodedData);
		const data = "content="+ticketData;
		console.log(data);
		//console.log(ticketSubmit);
		axios.post(`http://10.5.3.20:8080/REST/1.0/ticket/new?user=root&pass=password`, { data })
		  .then(res => {
			//console.log(res);
			console.log(res.data);
			const ticketResponse = res.data;
			this.props.callbackResponse(ticketResponse);
			//console.log(ticketResponse);
		  })
	  }
	  editTicket = event => {
		this.setState({
			formReviewWrap: false,
		  });
	  }

	render() {
		const { ssid_select_show, ssid_select_Tpasspoint,issue_type_other,formIsValid,errorClass ,defaultClass,formReviewWrap,errors} = this.state;
		return <div className="">
			{formReviewWrap||
			<div><h1 className="page-title">Report a TELUS Public Wi-Fi issue <span>(*)Mandatory</span></h1>
			<hr />
			<form onSubmit={this.handleSubmit}>
				<Row>
					<Col xs={12} md={7}>
						<h3>Tell us a bit about yourself</h3>
						<Row>
							<Col xs={12} md={12}> {formIsValid}
								<FormGroup bsSize="large" className={errors["fName"] ? errorClass: defaultClass }>
									<ControlLabel>First Name<sup>*</sup></ControlLabel>
									{/* <span className="error">{this.state.errors["fName"]}</span> */}
									<FormControl placeholder="First Name" type="text"
										name="fName"
										value={this.state.fName}
										onChange={this.handleInputChange}									
									/>
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large"  className={errors["lName"] ? errorClass: defaultClass}>
									<ControlLabel>Last Name<sup>*</sup></ControlLabel>
									{/* <span className="error">{this.state.errors["lName"]}</span> */}
									<FormControl placeholder="Last Name" type="text"
										name="lName"
										value={this.state.lName}
										onChange={this.handleInputChange}
									/>
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large">
									<ControlLabel>TELUS may contact me for the reported Issue via</ControlLabel>
									<Checkbox name="consentCheckbox" checked={this.state.consentEmail} onChange={this.handleInputChange} >
										Email
							</Checkbox>
									<Checkbox  name="consentCheckbox" checked={this.state.consentPhone} onChange={this.handleInputChange}>
										Phone
							</Checkbox>
									<ControlLabel>You can review the Telus Privacy Policy Here</ControlLabel>
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large"  className={errors["email"] ? errorClass: defaultClass}>
									<ControlLabel>Email<sup>*</sup></ControlLabel>
									{/* <span className="error">{this.state.errors["email"]}</span> */}
									<FormControl placeholder="Email" type="email"
										name="email"
										value={this.state.email}
										onChange={this.handleInputChange}
									/>
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large" className={errors["phone"] ? errorClass: defaultClass}>
									<ControlLabel>Phone<sup>*</sup></ControlLabel>
									{/* <span className="error">{this.state.errors["phone"]}</span> */}
									<FormControl placeholder="Phone" type="text"
										name="phone"
										value={this.state.phone}
										onChange={this.handleInputChange}
									/>
								</FormGroup>
							</Col>
						</Row>
						<h3>Tell us about your issue</h3>
						<Row>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large"  className={errors["ssid_select"] ? errorClass: defaultClass}>
									<ControlLabel>Wi-Fi Network Name or SSID<sup>*</sup></ControlLabel>
									{/* <span className="error">{this.state.errors["ssid_select"]}</span> */}
									<FormControl componentClass="select" name="ssid_select"
										value={this.state.ssid_select}
										onChange={this.handleInputChange}>
										<option value="0">Select</option>
										<option>#TELUS</option>
										<option>TELUSPasspoint</option>
										<option value="Other">Other</option>
									</FormControl>
								</FormGroup>
								{ssid_select_show && <FormGroup bsSize="large" className={errors["other_ssid_details"] ? errorClass: defaultClass}>
										<ControlLabel>Other Details (Wi-Fi SSID)<sup>*</sup></ControlLabel>
										{/* <span className="error">{this.state.errors["other_ssid_details"]}</span> */}
										<FormControl placeholder="Other Details" type="text"
											name="other_ssid_details"
											value={this.state.other_ssid_details}
											onChange={this.handleInputChange}
										/>
									</FormGroup>}
									{ssid_select_Tpasspoint && <FormGroup bsSize="large" >
										<ControlLabel>TELUSPasspoint provides Wi-Fi Roaming service to TELUS Wi-Fi Roaming partners and customers.<br />
											Eligible devices will automatically connect to TELUSPasspoint.
</ControlLabel>

									</FormGroup>}
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large"  className={errors["mac_address"] ? errorClass: defaultClass}>
									<ControlLabel>Device Wi-Fi MAC Address<sup>*</sup></ControlLabel>
									{/* <span className="error">{this.state.errors["mac_address"]}</span> */}
									<FormControl placeholder="MAC Address" type="text"
										name="mac_address"
										value={this.state.mac_address}
										onChange={this.handleInputChange}
									/>
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large">
									<ControlLabel>Device & OS Type</ControlLabel>
									<FormControl componentClass="select" name="device_os"
										value={this.state.device_os}
										onChange={this.handleInputChange}>
										<optgroup label="Laptop">
											<option value="Laptop - ios">iOS</option>
											<option>MacOS</option>
											<option>Windows</option>
											<option>ChromeOS</option>
										</optgroup>
										<optgroup label="Tablet">
											<option>iOS</option>
											<option>MacOS</option>
											<option>Windows</option>
											<option>Android</option>
											<option>ChromeOS</option>
										</optgroup>
										<optgroup label="Mobile">
											<option>iOS</option>
											<option>MacOS</option>
											<option>Windows</option>
											<option>Android</option>
											<option>ChromeOS</option>
										</optgroup>
									</FormControl>
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large" className={errors["issue"] ? errorClass: defaultClass}>
									<ControlLabel>Issue Type<sup>*</sup></ControlLabel>
									<FormControl componentClass="select" name="issue"
										value={this.state.issue}
										onChange={this.handleInputChange}>
										<option value="0">Select Issue</option>
										<option>Unable to see Wi-Fi Network or SSID on device</option>
										<option>Can see Wi-Fi Network SSID on device but unable to connect</option>
										<option>Can connect to Wi-Fi Network SSID but no internet access</option>
										<option>Can connect to Wi-Fi Network SSID and access internet but experience frequent drops</option>
										<option>Can connect to Wi-Fi Network SSID but unable to see Registration Splash Page</option>
										<option>Can connect to Wi-Fi Network SSID but unable to register using TELUS/Koodo account credential</option>
										<option>Registered on Splash Page but did not receive Email</option>
										<option>Registered on Splash Page but did not receive Text Message</option>
										<option>Others</option>
									</FormControl>
								</FormGroup>
								{issue_type_other &&
								<div>
									<FormGroup bsSize="large" className={errors["other_issue"] ? errorClass: defaultClass}>
										<ControlLabel>Other Details (Issue Type)<sup>*</sup></ControlLabel>
										<FormControl placeholder="Other Details (Issue Type)" type="text"
											name="other_issue"
											value={this.state.other_isse}
											onChange={this.handleInputChange} />
									</FormGroup>
								</div>
								}
							</Col>
						</Row>
						<h3>Tell us about the location where you experienced the issue</h3>
						<Row>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large" className={errors["company_name"] ? errorClass: defaultClass}>
									<ControlLabel>Company Name<sup>*</sup></ControlLabel>
									{/* <span className="error">{this.state.errors["company_name"]}</span> */}
									<FormControl placeholder="Company Name" type="text"
										name="company_name"
										value={this.state.company_name}
										onChange={this.handleInputChange} />
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large">
									<ControlLabel>Company Phone Number</ControlLabel>
									<FormControl placeholder="Company Phone Number" type="text"
										name="company_phone"
										value={this.state.company_phone}
										onChange={this.handleInputChange} />
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large">
									<ControlLabel>Where did you experienced the issue</ControlLabel>
									<FormControl placeholder="Address" type="text"
										name="address"
										value={this.state.address}
										onChange={this.handleInputChange} />
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large" className={errors["city"] ? errorClass: defaultClass}>
									<ControlLabel>City<sup>*</sup></ControlLabel>
									{/* <span className="error">{this.state.errors["city"]}</span> */}
									<FormControl placeholder="City" type="text"
										name="city"
										value={this.state.city}
										onChange={this.handleInputChange} />
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large" className={errors["province"] ? errorClass: defaultClass}>
									<ControlLabel>Province<sup>*</sup></ControlLabel>
									<FormControl componentClass="select" name="province"
										value={this.state.province}
										onChange={this.handleInputChange}>
										<option value="0">Select</option>
										<option>AB</option>
										<option>BC</option>
										<option>MB</option>
										<option>NL</option>
										<option>NS</option>
										<option>NT</option>
										<option>NU</option>
										<option>ON</option>
										<option>PE</option>
										<option>QC</option>
										<option>SK</option>
										<option>YT</option>
									</FormControl>
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large" className={errors["date"] ? errorClass: defaultClass}>
									<ControlLabel>Date<sup>*</sup></ControlLabel>
									<FormControl placeholder="DD/MM/YYY" type="text"
										name="date"
										value={this.state.date}
										onChange={this.handleInputChange} />
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<Row>
									<Col xs={12} md={6}>
										<FormGroup bsSize="large" >
											<ControlLabel>Time</ControlLabel>
											<FormControl componentClass="select" name="time_hh"
												value={this.state.time_hh}
												onChange={this.handleInputChange}>
												<option value="0">HH</option>
												<option>00</option>
												<option>01</option>
												<option>02</option>
												<option>03</option>
												<option>04</option>
												<option>05</option>
												<option>06</option>
												<option>07</option>
												<option>08</option>
												<option>09</option>
												<option>10</option>
												<option>11</option>
												<option>12</option>
												<option>13</option>
												<option>14</option>
												<option>15</option>
												<option>16</option>
												<option>17</option>
												<option>18</option>
												<option>19</option>
												<option>20</option>
												<option>21</option>
												<option>22</option>
												<option>23</option>
												<option>24</option>
											</FormControl>
										</FormGroup>
									</Col>
									<Col xs={12} md={6}>
										<FormGroup bsSize="large">
											<ControlLabel>&nbsp;</ControlLabel>
											<FormControl componentClass="select" name="time_mm"
												value={this.state.time_mm}
												onChange={this.handleInputChange}>
												<option value="0">MM</option>
												<option>00</option>
												<option>05</option>
												<option>10</option>
												<option>15</option>
												<option>20</option>
												<option>25</option>
												<option>30</option>
												<option>35</option>
												<option>40</option>
												<option>45</option>
												<option>50</option>
												<option>55</option>
												<option>60</option>
											</FormControl>
										</FormGroup>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
				<h3>Provide any additional details here</h3>
				<Row>
					<Col xs={12} md={12}>
						<FormGroup bsSize="large">
							<FormControl componentClass="textarea" name="additional_details"
								value={this.state.additional_details}
								onChange={this.handleInputChange} />
						</FormGroup>
					</Col>
				</Row>
				<Button type="submit" className="btn btn-success">Review Submission</Button>
			</form>
			</div>
			}
			{formReviewWrap&& 
				<div className="">
			<h1 className="page-title">TELUS Public Wi-Fi issue reporting portal</h1>
			<hr />
			<div className="shadow_wrapper">
				<h3>Review your submission</h3>
				<form onSubmit={this.createTicket}>
				<div className="form-group row">
					<div className="col-sm-6">
						<label className="control-label">Name</label>
						<span>{this.state.fName}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Consent to reach customer</label>
						<span>Email & Phone</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Email</label>
						<span>{this.state.email}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Phone</label>
						<span>{this.state.phone}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Wi-Fi SSID</label>
						<span>{this.state.ssid_select}{this.state.other_ssid_details}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Device Wi-Fi MAC Address</label>
						<span>{this.state.mac_address}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Company Name</label>
						<span>{this.state.company_name}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Company Phone Number</label>
						<span>{this.state.company_phone}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Address</label>
						<span>{this.state.address} {this.state.city} {this.state.province}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Date & Time</label>
						<span>{this.state.date} {this.state.time}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Device</label>
						<span>{this.state.device_os}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">OS Type</label>
						<span>{this.state.device_os}</span>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Issue Type</label>
						<span>{this.state.issue} {this.state.other_issue}</span>
					</div>
					<div className="col-sm-12">
						<label className="control-label">Additional details</label>
						<span>{this.state.additional_details}</span>
					</div>
				</div>
				<div className="">
					<button type="submit" className="btn btn-success" >Submit</button> <button type="button" onClick={this.editTicket} className="btn btn-default">Edit</button>
				</div>
				</form>
			</div>
		</div>
			}
		</div>
	}
}

export default form;