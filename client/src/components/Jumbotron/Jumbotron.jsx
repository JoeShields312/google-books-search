import React from "react";
import { MDBJumbotron, MDBContainer, MDBCardTitle } from "mdbreact";
import './Jumbotron.css'
const Jumbotron = () => {
  return (
    <MDBContainer className="jumbocontain text-center text-white mx-auto col-md-10 py-3">
          <MDBJumbotron className="jumboimg" 
            style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/images/86.jpg)`}} >
                <MDBCardTitle className="text-center font-bold col-md-8 mx-auto">
                    React Google Search</MDBCardTitle>
                <p className=" text-center">Search for and save books of interest</p>
          
          </MDBJumbotron>
    </MDBContainer>
  )
}

export default Jumbotron;