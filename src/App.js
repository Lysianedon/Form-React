import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import form from './styles/form.css'

class App extends React.Component {

  constructor() {

    super();

    this.state = {

      emailFormat : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      emailInput : "",
      password : "",
      styleBox : {
        border : "solid 1px grey",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: "0.25",
        shadowRadius: "3.84",

        elevation: "5",
      }
    }
    
    //Bind functions 
    // this.checkEmail = this.checkEmail.bind(this);
    
  }


  renderEmail () {

    return (
        <div className="form-group" onChange={(e) => {

          this.setState({emailInput : e.target.value});

        }} >
          <label htmlFor="email" className="mb-2">Email address</label>

          {
              this.state.emailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ?
              (<input type="email" 
              className="form-control mb-3 border border-success input-success" 
              id="email" 
              aria-describedby="emailHelp" 
              placeholder="Enter email"
              ></input>) 
              :
              (<input type="email" 
              className="form-control mb-3 border border-danger input-fail" 
              id="email" 
              aria-describedby="emailHelp" 
              placeholder="Enter email"
              ></input>) 
          }
    </div>

    )

  }

  renderPassword() {

    return (
      <div className="form-group" onChange={(e) => {
        this.setState({password : e.target.value})
      }}>

      <label htmlFor="password" className="mb-2">Password</label>

      {
        this.state.password.length >= 6 ? 

        (<input type="password" 
        className="form-control mb-3 border-success input-success" 
        id="password" aria-describedby="emailHelp" 
        placeholder="Enter password..."></input> )
        :
        (<input type="password" 
        className="form-control mb-3 border-danger input-fail" 
        id="password" aria-describedby="emailHelp" 
        placeholder="Enter password..."></input> )
      }

    </div>
    )
  }

  render() {
 
    return (

      <div className="div-wrapper">
        <div className="row col-6 mx-auto mt-5 p-4">
          <h1 style={{textAlign : "center"}}>Login</h1>
          <form>

            {this.renderEmail()}

            {this.renderPassword()}

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="checkbox"></input>
              <label className="form-check-label mb-3" htmlFor="checkbox">Remember me</label>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
