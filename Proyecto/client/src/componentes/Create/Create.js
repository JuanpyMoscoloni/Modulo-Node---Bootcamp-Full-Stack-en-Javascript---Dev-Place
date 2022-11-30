import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBInputGroup,
  MDBBtn,
} from "mdb-react-ui-kit";
import Select from "react-select";
import "./Create.css";
import axios from "axios";

export default function CrearPublicacion() {
  const url = "http://localhost:3030/product/post";

  const [archivos, setArchivos] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, { archivos, precio });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
    const options = [
      { value: "iPad", label: "iPad" },
      { value: "iPhone", label: "iPhone" },
      { value: "iWatch", label: "iWatch" },
    ];
    return (
      <MDBRow className="mt-5">
        <MDBCol></MDBCol>
        <MDBCol>
          <div className="container-create-group">
            <h1 className="text-center mt-3"> Create Post </h1>
            <form className="m-3 p-4 justify-content-center flex-start">
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput
                    id="form3Example1"
                    placeholder="Title your product"
                    className="mb-3"
                  />
                </MDBCol>

                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  name="color"
                  options={options}
                />
                <div className="signo">
                  <p>$</p>
                  <MDBInput id="typeNumber" type="number" className="mt-3" />
                </div>
                <MDBInputGroup
                  className="mb-1"
                  textBefore="Upload"
                  textTag="label"
                  textProps={{ htmlFor: "inputGroupFile01" }}
                >
                  <input
                    className="form-control"
                    type="file"
                    id="inputGroupFile01"
                  />
                </MDBInputGroup>
              </MDBRow>

              <button type="submit" className="mb-4 ripple ripple-surface btn btn-primary btn-block" onSubmit={handleSubmit} block>
                Public
              </button>
            </form>
          </div>
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
    );
  };
}
