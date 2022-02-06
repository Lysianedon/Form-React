import React from "react";
import App from "../App";

class ConfirmationPage extends React.Component {

    constructor(){
        super();

        this.state = {

            display : "block",
        }
        //Bind functions :
        this.errorMessage = this.errorMessage.bind(this);
    }

    //Creating a function that will toggle the error message 
    errorMessage (){

        setTimeout(() => {
            this.setState({display : "none"});

        }, 2000);

    }
    render(){

        return (

            <div>
                {/* Checking the inputs form : if everything is OK, the form is submitted, otherwise, an error message is displayed. */}
            {
                this.props.password.length >= 6 && this.props.emailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ?
                
                ( <div className="row col-6 mx-auto mt-5 p-4 submitted">
                        <h1 className="mx-auto">Form submitted</h1>
                </div>)
                :
                (
                    <> 
                    {this.errorMessage()}
                    <p className="error" style={{display : this.state.display}}>Erreur : champs invalides !</p>
                    <App/>
                    </>
                )
            }
            </div>

        )
    }
}


export default ConfirmationPage;