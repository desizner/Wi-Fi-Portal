import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import Form from './form/form';
import FormReview from './formReview/formReview';
import FormResponse from './formResponse/formResponse';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Form /> 
               {/*<FormReview/>
              <FormResponse/>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
