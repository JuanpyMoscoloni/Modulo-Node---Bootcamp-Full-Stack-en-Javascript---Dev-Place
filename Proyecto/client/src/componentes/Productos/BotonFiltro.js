import React from "react";
import { Nav } from "react-bootstrap";
import "./BotonFiltro.css";

export default function BotonFiltro() {
  return (
    <>
      <div className="container-filtro">
        <Nav.Link className="ripple ripple-surface btn btn-light" href="/productos">
          Todos
        </Nav.Link>
        <Nav.Link
          className="ripple ripple-surface btn btn-light"
          href="/ipad"
        >
          iPad
        </Nav.Link>
        <Nav.Link
          className="ripple ripple-surface btn btn-light"
          href="/iphone"
        >
          iPhone
        </Nav.Link>
        <Nav.Link
          className="ripple ripple-surface btn btn-light"
          href="/iwatch"
        >
          iWatch
        </Nav.Link>
      </div>
    </>
  );
}
