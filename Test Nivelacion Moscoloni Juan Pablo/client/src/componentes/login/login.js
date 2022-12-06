import React from "react";
import { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";

export default function Login() {
  const url = "http://localhost:5050/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var bodyFormData = {
        "email": email,
        "password": password
      };
     
      const resp = await axios.post(url, bodyFormData);
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <MDBRow className="mt-5">
      <MDBCol></MDBCol>
      <MDBCol>
        <div className="container-login-group">
          <h1 className="text-center mt-3"> Login your account </h1>
          <form
            className="mt-1 p-4 justify-content-center flex-start"
            onSubmit={handleSubmit}
          >
            <MDBRow className="mb-4"></MDBRow>
            <MDBInput
              className="mb-4"
              type="email"
              id="formExample3"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              className="mb-4 container-password"
              type="password"
              id="formExample4"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <MDBCheckbox
              wrapperClass=" "
              id="form3Example5"
              label="Subscribe to our newsletter"
              defaultChecked
            />
            <div className="container-button-login mt-2">
              <button
                type="submit"
                className="mb-4 ripple ripple-surface btn btn-primary btn-block"
                onSubmit={handleSubmit}
                block
              >
                Sign in
              </button>
            </div>

            <div className="text-center container-icons">
              <p>
                Not a member? <a to="/register">Register</a>
              </p>
              <p>or sign up with:</p>

              <button
                floating
                className="ripple ripple-surface btn btn-primary btn-floating mx-1"
              >
                <MDBIcon fab icon="facebook-f" />
              </button>

              <button
                floating
                className="ripple ripple-surface btn btn-primary btn-floating mx-1"
              >
                <MDBIcon fab icon="google" />
              </button>

              <button
                floating
                className="ripple ripple-surface btn btn-primary btn-floating mx-1"
              >
                <MDBIcon fab icon="twitter" />
              </button>

              <button
                floating
                className="ripple ripple-surface btn btn-primary btn-floating mx-1"
              >
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
