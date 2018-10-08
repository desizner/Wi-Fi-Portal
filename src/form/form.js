import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Row, Col, Checkbox } from "react-bootstrap";
import './form.css';

class form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fName: '',
			Lname: '',
			email: '',
			phone: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
		//this.props.onChange(data);

	}
	render() {
		return <div className="">
			<h1 className="page-title">Report a TELUS Public Wi-Fi issue <span>(*)Mandatory</span></h1>
			<hr />
			<h3>Tell us about yourself</h3>
			<Row>
				<Col xs={12} md={6}>
					<FormGroup bsSize="large">
						<ControlLabel>First Name<sup>*</sup></ControlLabel>
						<FormControl placeholder="First Name" type="text"
							name="fName"
							value={this.state.fName}
							onChange={this.handleInputChange}
						/>
					</FormGroup>
				</Col>
				<Col xs={12} md={6}>
					<FormGroup bsSize="large">
						<ControlLabel>First Name<sup>*</sup></ControlLabel>
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
				<Col xs={12} md={6}>
					<FormGroup bsSize="large">
						<ControlLabel>Email<sup>*</sup></ControlLabel>
						<FormControl placeholder="Email" type="email"
							name="email"
							value={this.state.email}
							onChange={this.handleInputChange}
						/>
					</FormGroup>
				</Col>
				<Col xs={12} md={6}>
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
				<Col xs={12} md={6}>
					<FormGroup bsSize="large">
						<ControlLabel>Wi-Fi Network Name or SSID<sup>*</sup></ControlLabel>
						<FormControl componentClass="select" placeholder="select">
							<option value="0">Select</option>
							<option>#TELUS</option>
							<option>TELUSPasspoint</option>
							<option value="Other">Other</option>
						</FormControl>
						<div className="hidden">
							<ControlLabel>Other Details (Wi-Fi SSID)<sup>*</sup></ControlLabel>
							<FormControl placeholder="Phone" type="text"

							/>
						</div>
					</FormGroup>
				</Col>
				<Col xs={12} md={6}>
					<FormGroup bsSize="large">
						<ControlLabel>Device Wi-Fi MAC Address<sup>*</sup></ControlLabel>
						<FormControl placeholder="MAC Address" type="text"
							name="phone"
							value={this.state.phone}
							onChange={this.handleInputChange}
						/>
					</FormGroup>
				</Col>
			</Row>
			<h3>Tell us about the location where you experienced the issue</h3>
			<Row>
				<Col xs={12} md={6}>
					<FormGroup bsSize="large">
						<ControlLabel>Company Name</ControlLabel>
						<FormControl placeholder="Company Name" type="text" />
					</FormGroup>
				</Col>
				<Col xs={12} md={6}>
					<FormGroup bsSize="large">
						<ControlLabel>Company Phone Number</ControlLabel>
						<FormControl placeholder="Company Phone Number" type="text" />
					</FormGroup>
				</Col>
				<Col xs={12} md={6}>
					<FormGroup bsSize="large">
						<ControlLabel>Where did you experienced the issue</ControlLabel>
						<FormControl placeholder="Address" type="text" />
					</FormGroup>
				</Col>
				<Col xs={12} md={6}>
					<FormGroup bsSize="large">
						<ControlLabel>City<sup>*</sup></ControlLabel>
						<FormControl placeholder="City" type="text" />
					</FormGroup>
				</Col>
				<Col xs={12} md={6}>
					<FormGroup bsSize="large">
						<ControlLabel>Province<sup>*</sup></ControlLabel>
						<FormControl componentClass="select" placeholder="select">
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
				<Col xs={12} md={6}>
					<FormGroup bsSize="large">
						<ControlLabel>Date<sup>*</sup></ControlLabel>
						<FormControl placeholder="DD/MM/YYY" type="text" />
					</FormGroup>
				</Col>
				<Col xs={12} md={6}>
					<Row>
						<Col xs={12} md={6}>
							<FormGroup bsSize="large">
								<ControlLabel>Time</ControlLabel>
								<FormControl componentClass="select" placeholder="HH">
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
								<FormControl componentClass="select" placeholder="MM">
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
				<Col xs={12} md={6}>
					<FormGroup bsSize="large">
						<ControlLabel>Device & OS Type</ControlLabel>
						<FormControl componentClass="select" placeholder="Select">
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
				<Col xs={12} md={6}>
					<FormGroup bsSize="large">
						<ControlLabel>Issue Type<sup>*</sup></ControlLabel>
						<FormControl componentClass="select" placeholder="Issue Type">
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
							<FormControl placeholder="Other Details (Issue Type)" type="text" />
						</FormGroup>
					</div>
				</Col>

			</Row>
			<h3>Provide any additional details here</h3>
			<Row>
				<Col xs={12} md={12}>
					<FormGroup bsSize="large">
						<FormControl componentClass="textarea" />
					</FormGroup>
				</Col>
			</Row>
			<Button type="submit" className="btn btn-success">Submit</Button>
		</div>
	}
}

export default form;