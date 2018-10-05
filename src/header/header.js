import React, { Component } from 'react';
import logo from '../logo.svg';
import './header.css';

class header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#reactNavebar" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      {/* <a className="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" /></a> */}
		    </div>
		    <div className="collapse navbar-collapse" id="reactNavebar">
		      <ul className="nav navbar-nav">
		        <li><a href="#">Personal <span className="sr-only">(current)</span></a></li>
		        <li className="active"><a href="#">Business</a></li>
		      </ul>
		    </div>
		  </div>
		</nav>
    );
  }
}

export default header;