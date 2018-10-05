import React, { Component } from 'react';
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
		} );
		//this.props.onChange(data);

    }

  render() {
    return   <div className="">
				<h1 className="page-title">Report a TELUS Public Wi-Fi issue <span>(*)Mandatory</span></h1>
				<hr/>
				<h3>Tell us about yourself</h3>
				<div className="form-group row">
					<div className="col-sm-6 has-error">
						<label className="control-label">First Name<sup>*</sup></label>
						<input type="text" 
						className="form-control"
						placeholder="First Name"
						name="fName"
						value={this.state.fName}
						onChange={this.handleInputChange}
						/>
						{this.state.fName}
					</div>
					<div className="col-sm-6">
						<label className="control-label">Last Name<sup>*</sup></label>
						<input type="text" 
						className="form-control"
						placeholder="Last Name"
						name="lName"
						value={this.state.lName}
						onChange={this.handleInputChange}
						/>
					</div>
					<div className="col-sm-12">
						<label>TELUS may contact me for the reported Issue via</label>
						<div className="checkbox">
							<label>
								<input type="checkbox"/> Email
							</label>
						</div>
						<div className="checkbox">
							<label>
								<input type="checkbox"/> Phone
							</label>
						</div>
						<label>You can review the Telus Privacy Policy Here</label>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Email<sup>*</sup></label>
						<input type="text" 
						className="form-control"
						placeholder="Email"
						name="email"
						value={this.state.email}
						onChange={this.handleInputChange}
						/>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Phone<sup>*</sup></label>
						<input type="text" 
						className="form-control"
						placeholder="Phone"
						name="phone"
						value={this.state.phone}
						onChange={this.handleInputChange}
						/>
					</div>
				</div>
				<h3>Tell us about your business</h3>
				<div className="form-group row">
					<div className="col-sm-6">
						<label className="control-label">Wi-Fi Network Name or SSID<sup>*</sup></label>
						<select className="form-control">
							<option value="0">Select</option>
							<option>#TELUS</option>
							<option>TELUSPasspoint</option>
							<option value="Other">Other</option>
						</select>
						<div className="hidden">
						<label className="control-label">Other Details (Wi-Fi SSID)<sup>*</sup></label>
						<input type="text" className="form-control"/>
						</div>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Device Wi-Fi MAC Address<sup>*</sup></label>
						<input type="text" className="form-control"/>
					</div>
				</div>
				<h3>Tell us about the location where you experienced the issue</h3>
				<div className="form-group row">
					<div className="col-sm-6">
						<label className="control-label">Company Name</label>
						<input type="text" className="form-control"/>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Company Phone Number</label>
						<input type="text" className="form-control"/>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Where did you experienced the issue</label>
						<input type="text" className="form-control"/>
					</div>
					<div className="col-sm-6">
						<label className="control-label">City<sup>*</sup></label>
						<input type="text" className="form-control"/>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Province<sup>*</sup></label>
						<select className="form-control">
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
						</select>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Date<sup>*</sup></label>
						<input type="text" className="form-control"/>
					</div>
					<div className="col-sm-6">
						<div className="row">
							<div className="col-sm-6">
								<label className="control-label">Time</label>
								<select className="form-control">
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
								</select>
							</div>
							<div className="col-sm-6">
								<label className="control-label">&nbsp;</label>
								<select className="form-control">
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
								</select>
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<label className="control-label">Device & OS Type</label>
						<select  className="form-control">
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
						</select>
					</div>
					<div className="col-sm-6">
								<label className="control-label">Issue Type</label>
								<select className="form-control">
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
								</select>
								<div className="hidden">
									<label className="control-label">Other Details (Issue Type)<sup>*</sup></label>
									<textarea className="form-control"></textarea>
								</div>
							</div>
				</div>
				<h3>Provide any additional details here</h3>
				<div className="form-group">
					<textarea className="form-control"></textarea>
					<div className="checkbox">
						<label>
							<input type="checkbox"/> I agree to receive My TELUS updates and to the TELUS Privacy Commitment.
						</label>
					</div>
				</div>
				<button type="submit" className="btn btn-success">Submit</button>
    		</div>
  }
}

export default form;