import React from "react";
import { MDBInput, MDBCol, MDBRow, MDBInputGroup } from "mdb-react-ui-kit";
import "./Create.css";
import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";

export default function CrearPublicacion() {
  const url = "http://localhost:5050/productos";

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [img, setImg] = useState("");
  const [quantity, setQuantity] = useState("");
  const [random, setRandom] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("title", title);  
      bodyFormData.append("price", price);
      bodyFormData.append("type", type);
      bodyFormData.append("img", img[0]);
      bodyFormData.append("quantity", quantity);
      bodyFormData.append("random", random);

      const resp = await axios.post(url, bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <MDBRow className="mt-5">
      <MDBCol></MDBCol>
      <MDBCol>
        <div className="container-create-group">
          <h1 className="text-center mt-3"> Create Post </h1>
          <form
            className="m-3 p-4 justify-content-center flex-start"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <MDBRow className="mb-4 justify-content-center">
              <MDBCol>
                <MDBInput
                  id="form3Example1"
                  placeholder="Title your product"
                  className="mb-3"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </MDBCol>

              <div className="signo">
                <p>$</p>
                <MDBInput
                  id="typeNumber"
                  type="number"
                  className=""
                  placeholder="Precio"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                 <MDBInput placeholder="Cantidad" id='typeCantidad' type='number' value={quantity}
                onChange={(e) => setQuantity(e.target.value)} />
              </div>
              <Form.Select
                aria-label="Default select example"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Ninguno</option>
                <option value="iPhone">iPhone</option>
                <option value="iPad">iPad</option>
                <option value="iWatch">iWatch</option>
              </Form.Select>
              <MDBInputGroup
                className="mb-1 mt-3"
                textBefore="Upload"
                textTag="label"
                textProps={{ htmlFor: "inputGroupFile01" }}
              >
                <Form.Control
                  type="file"
                  onChange={(e) => setImg(e.target.files)}
                />
              </MDBInputGroup>
            </MDBRow>

            <button
              type="submit"
              className="mb-4 ripple ripple-surface btn btn-primary btn-block"
              onSubmit={handleSubmit}
              block
            >
              Public
            </button>
          </form>
        </div>
      </MDBCol>
      <MDBCol></MDBCol>
    </MDBRow>
  );
}
