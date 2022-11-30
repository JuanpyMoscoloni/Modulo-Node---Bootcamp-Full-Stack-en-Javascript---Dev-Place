import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <MDBRow className="mt-5">
      <MDBCol></MDBCol>
      <MDBCol>
        <div className="container-login-group">
          <h1 className="text-center mt-3"> Login your account </h1>
          <form className="mt-1 p-4 justify-content-center flex-start">
            <MDBRow className="mb-4"></MDBRow>
            <MDBInput
              className="mb-4"
              type="email"
              id="formExample3"
              placeholder="Email address"
            />
            <MDBInput
              className="mb-4 container-password"
              type="password"
              id="formExample4"
              placeholder="Password"
            />

            <MDBCheckbox
              wrapperClass=" "
              id="form3Example5"
              label="Subscribe to our newsletter"
              defaultChecked
            />
            <div className="container-button-login mt-2">
              <button type="submit" className="mb-4 ripple ripple-surface btn btn-primary btn-block" block>
                Sign in
              </button>
            </div>

            <div className="text-center container-icons">
              <p>
                Not a member? <NavLink to="/register">Register</NavLink>
              </p>
              <p>or sign up with:</p>

              <button floating className="ripple ripple-surface btn btn-primary btn-floating mx-1">
                <MDBIcon fab icon="facebook-f" />
              </button>

              <button floating className="ripple ripple-surface btn btn-primary btn-floating mx-1">
                <MDBIcon fab icon="google" />
              </button>

              <button floating className="ripple ripple-surface btn btn-primary btn-floating mx-1">
                <MDBIcon fab icon="twitter" />
              </button>

              <button floating className="ripple ripple-surface btn btn-primary btn-floating mx-1" >
                <MDBIcon fab icon="github" />
              </button>
            </div>
          </form>
        </div>
      </MDBCol>
      <MDBCol></MDBCol>
    </MDBRow>
  );
}
