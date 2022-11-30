import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import './Form.css';

export default function Formulario() {
  return (
    <MDBRow className="mt-5">
      <MDBCol className="d-flex justify-content-center container-imagen">
        <a href="">
          {" "}
          <img src="./images/appleOferta.jpg" alt="" />
        </a>
      </MDBCol>

      <MDBCol>
        
        <div className="container-form-group">
        <h1 className="text-center mt-3"> Register </h1>
          <form className="m-3 p-4 justify-content-center flex-start">
            <MDBRow className="mb-4">
              <MDBCol>
                <MDBInput id="form3Example1" placeholder="First name" />
              </MDBCol>
              <MDBCol>
                <MDBInput id="form3Example2" placeholder="Last name" />
              </MDBCol>
            </MDBRow>
            <MDBInput
              className="mb-4"
              type="email"
              id="form3Example3"
              placeholder="Email address"
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="form3Example4"
              placeholder="Password"
            />

            <MDBCheckbox
              wrapperClass=" "
              id="form3Example5"
              label="Subscribe to our newsletter"
              defaultChecked
            />

            <MDBBtn type="submit" className="mb-4" block>
              Sign in
            </MDBBtn>

            <div className="text-center">
              
              <p>or sign up with:</p>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="google" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </div>
          </form>
        </div>
      </MDBCol>
    </MDBRow>
  );
}
