import Container from "../components/Container/Container.jsx";
import React, { useState, useEffect } from "react";
// import axios from "axios";
import "../App.css";
const key = "AIzaSyCJsckSxIQ8Ry42DxSvgFEeNp26mXtVDw8";


const Saved = () => {
    return (
        <Container fluid>
        <div className="searchbox text-center px-auto mx-auto">
          <h1 className="text-white text-center">Saved PAGE</h1>
                  <React.Fragment>
                      <ul className="list-group px-auto mx-auto">
                        <li className="list-group-item my-2 mx-5 px-5">
                         
                        </li>
                        <li className="list-group-item my-2 mx-5 px-5">
                          
                        </li>
                        <li className="list-group-item my-2 mx-5 px-5">
                          
                        </li>
                        <li className="list-group-item my-2 mx-5 px-5">
                        
                        </li>
                     
                      </ul>
                      <br />
                      <br />
                  </React.Fragment>
                );
              })
            : ""}
        </div>
      </Container>
    );
  };
    


export default Saved;