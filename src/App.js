import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
// import Login from './login/login';
import Form from './form/form';
import FormResponse from './formResponse/formResponse';
//import { Switch, Route,Link ,BrowserRouter} from 'react-router-dom'

//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleResponse = this.handleResponse.bind(this);
    this.state = {
      formResponse:'',
      componentToShow: 'first'
    };
  }


  handleResponse(ticketResponse) {
    this.setState({
      formResponse: ticketResponse,
      formResponseWrap: true,
      componentToShow: 'second'
    });
  }

  render() {
    const { componentToShow} = this.state;
    let componentValue= ""; 
    switch(componentToShow){
      case 'first':
      componentValue = <Form callbackresponse={this.handleResponse} />
      break;
      case 'second':
      componentValue = <FormResponse  formResponse={this.state.formResponse} />
      break;
    }

    return (
      // <BrowserRouter>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                
                {componentValue}
                {/* <nav>
                  <ul className="list-inline">
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/form'>Form</Link></li>
                    <li><Link to='/formReview'>FormReview</Link></li>
                    <li><Link to='/FormResponse'>FormResponse</Link></li>
                  </ul>
                </nav>
                <Switch>
                  <Route exact path='/login' component={Login} />
                  <Route path='/form' component={Form} />
                  <Route path='/formReview' component={FormReview} />
                  <Route path='/FormResponse' component={FormResponse} />
                </Switch> */}
              </div>
            </div>
          </div>
        </div>
      // </BrowserRouter>
    );
  }
}

export default App;
