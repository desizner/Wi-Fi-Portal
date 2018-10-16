import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Row, Col, Checkbox } from "react-bootstrap";
import './form.css';

class form extends Component {
	constructor(props) {
		super(props);
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
			errors: {}
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleValidation(){
		let fName = this.state.fName;
		let	lName = this.state.lName;
		let	email = this.state.email;
		let	phone = this.state.phone;
		let ssid_select = this.state.ssid_select;
		let other_ssid_details = this.state.other_ssid_details;
		let mac_address = this.state.mac_address;
		let company_name = this.state.company_name;
		let company_phone = this.state.company_phone;
		let address = this.state.address;
		let city = this.state.city;
		let province = this.state.province;
		let date = this.state.date;
		let time_hh = this.state.time_hh;
		let time_mm = this.state.time_mm;
		let device_os = this.state.device_os;
		let issue = this.state.issue;
		let other_issue = this.state.other_issue;
		let additional_details = this.state.additional_details;
		let errors = {};
		let formIsValid = true;
	
		//Name
		if(!fName){
		  formIsValid = false;
		  errors["fName"] = "Enter your first name";
		}
		// if(typeof fName !== "undefined"){
		//   if(!fName.match(/^[a-zA-Z]+$/)){
		// 	formIsValid = false;
		// 	errors["fName"] = "Only letters";
		//   }      	
		// }
		if(!lName){
			formIsValid = false;
			errors["lName"] = "Enter your last name";
		  }
		if(!ssid_select){
			formIsValid = false;
			errors["ssid_select"] = "Please select Wi-Fi Network Name or SSID";
		  }
	
		//Email
		if(!email){
		  formIsValid = false;
		  errors["email"] = "Cannot be empty";
		}
	
		if(typeof email !== "undefined"){
		  let lastAtPos = email.lastIndexOf('@');
		  let lastDotPos = email.lastIndexOf('.');
	
		  if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
			formIsValid = false;
			errors["email"] = "Email is not valid";
		  }
		}
	
		this.setState({errors: errors});
		return formIsValid;
	  }
	handleInputChange(event, field) {
		this.setState({
		 	[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const data = {
			name: this.state.fName +' '+ this.state.lName,
			email: this.state.email,
			phone: this.state.phone,
			ssid_select: this.state.ssid_select,
			other_ssid_details: this.state.other_ssid_details,
			mac_address: this.state.mac_address,
			company_name: this.state.company_name,
			company_phone: this.state.company_phone,
			address: this.state.address,
			city: this.state.city,
			province: this.state.province,
			date: this.state.date,
			time: this.state.time_hh +':'+ this.state.time_mm,
			device_os: this.state.device_os,
			issue: this.state.issue,
			other_issue: this.state.other_issue,
			additional_details: this.state.additional_details,
		};
		
		if(this.handleValidation()){
			alert("Form submitted");
			this.props.callbackParent(data);
		  }else{
			alert("Form has errors.")
		  }

		
	}
	render() {
		const formValid = this.props.formIsValid;
		console.log(formValid);
		return <div className="">
			<h1 className="page-title">Report a TELUS Public Wi-Fi issue <span>(*)Mandatory</span></h1>
			<hr />
			<form onSubmit={this.handleSubmit}>
				<Row>
					<Col xs={12} md={7}>
						<h3>Tell us about yourself</h3>
						<Row>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large">
									<ControlLabel>First Name<sup>*</sup></ControlLabel>
									<span className="error">{this.state.errors["fName"]}</span>
									<FormControl placeholder="First Name" type="text"
										name="fName"
										value={this.state.fName}
										onChange={this.handleInputChange}
									/>
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large">
									<ControlLabel>First Name<sup>*</sup></ControlLabel>
									<span className="error">{this.state.errors["lName"]}</span>
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
									<Checkbox >
										Email
							</Checkbox>
									<Checkbox >
										Phone
							</Checkbox>
									<ControlLabel>You can review the Telus Privacy Policy Here</ControlLabel>
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large">
									<ControlLabel>Email<sup>*</sup></ControlLabel>
									<span className="error">{this.state.errors["email"]}</span>
									<FormControl placeholder="Email" type="email"
										name="email"
										value={this.state.email}
										onChange={this.handleInputChange}
									/>
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large">
									<ControlLabel>Phone<sup>*</sup></ControlLabel>
									<FormControl placeholder="Phone" type="text"
										name="phone"
										value={this.state.phone}
										onChange={this.handleInputChange}
									/>
								</FormGroup>
							</Col>
						</Row>
						<h3>Tell us about your business</h3>
						<Row>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large">
									<ControlLabel>Wi-Fi Network Name or SSID<sup>*</sup></ControlLabel>
									<span className="error">{this.state.errors["ssid_select"]}</span>
									<FormControl componentClass="select" name="ssid_select"
										value={this.state.ssid_select}
										onChange={this.handleInputChange} placeholder="select">
										<option value="0">Select</option>
										<option>#TELUS</option>
										<option>TELUSPasspoint</option>
										<option value="Other">Other</option>
									</FormControl>
									<div className="hidden">
										<ControlLabel>Other Details (Wi-Fi SSID)<sup>*</sup></ControlLabel>
										<FormControl placeholder="Other Details" type="text"
											name="other_ssid_details"
											value={this.state.other_ssid_details}
											onChange={this.handleInputChange}
										/>
									</div>
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large">
									<ControlLabel>Device Wi-Fi MAC Address<sup>*</sup></ControlLabel>
									<FormControl placeholder="MAC Address" type="text"
										name="mac_address"
										value={this.state.mac_address}
										onChange={this.handleInputChange}
									/>
								</FormGroup>
							</Col>
						</Row>
						<h3>Tell us about the location where you experienced the issue</h3>
						<Row>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large">
									<ControlLabel>Company Name</ControlLabel>
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
								<FormGroup bsSize="large">
									<ControlLabel>City<sup>*</sup></ControlLabel>
									<FormControl placeholder="City" type="text"
										name="city"
										value={this.state.city}
										onChange={this.handleInputChange} />
								</FormGroup>
							</Col>
							<Col xs={12} md={12}>
								<FormGroup bsSize="large">
									<ControlLabel>Province<sup>*</sup></ControlLabel>
									<FormControl componentClass="select" placeholder="select" name="province"
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
								<FormGroup bsSize="large">
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
										<FormGroup bsSize="large">
											<ControlLabel>Time</ControlLabel>
											<FormControl componentClass="select" placeholder="HH" name="time_hh"
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
											<FormControl componentClass="select" placeholder="MM" name="time_mm"
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
							<Col xs={12} md={12}>
								<FormGroup bsSize="large">
									<ControlLabel>Device & OS Type</ControlLabel>
									<FormControl componentClass="select" placeholder="Select" name="device_os"
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
								<FormGroup bsSize="large">
									<ControlLabel>Issue Type<sup>*</sup></ControlLabel>
									<FormControl componentClass="select" placeholder="Issue Type" name="issue"
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
								<div className="hidden">
									<FormGroup bsSize="large">
										<ControlLabel>Other Details (Issue Type)<sup>*</sup></ControlLabel>
										<FormControl placeholder="Other Details (Issue Type)" type="text"
											name="other_issue"
											value={this.state.other_isse}
											onChange={this.handleInputChange} />
									</FormGroup>
								</div>
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
				<Button type="submit" className="btn btn-success">Submit</Button>
			</form>
		</div>
	}
}

export default form;