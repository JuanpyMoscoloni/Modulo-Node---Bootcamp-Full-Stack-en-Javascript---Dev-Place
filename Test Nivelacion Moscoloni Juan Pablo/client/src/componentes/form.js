import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Form.css";
import { useState } from "react";
import axios from "axios";

export default function Formulario() {
  const url = "http://localhost:5050/users";

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var users = {
        username: username,
        email: email,
        password: password,
      };

      const resp = await axios.post(url, users, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <MDBRow className="mt-5">
        <MDBCol>
          <div className="container-form-group">
            <h1 className="text-center mt-3"> Register </h1>
            <form
              className="m-3 p-4 justify-content-center flex-start"
              onSubmit={handleSubmit}
            >
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    id="form3Example1"
                    placeholder="First name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>
              <MDBInput
                className="mb-4"
                type="email"
                id="form3Example3"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                className="mb-4"
                type="password"
                id="form3Example4"
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

              <button
                type="submit"
                className="ripple ripple-surface btn btn-primary btn-block mb-4"
                block
              >
                Sign in
              </button>

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
    </>
  );
}
