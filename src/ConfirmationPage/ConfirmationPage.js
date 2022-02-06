import React from "react";
import App from "../App";


class ConfirmationPage extends React.Component {


    constructor(){
        super();

        this.state = {

            errorMessage : "hidden",
            display : "block",
        }
        //Bind functions :
        this.errorMessage = this.errorMessage.bind(this);
    }

    errorMessage (){

        setTimeout(() => {
            this.setState({display : "none"});

        }, 2000);

    }
    render(){

        return (

            <div>

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