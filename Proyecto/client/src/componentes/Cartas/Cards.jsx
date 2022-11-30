import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import cartas from "../data/data";
import { React, useState } from "react";
import { useCart } from "react-use-cart";

function generateRandom(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (1 + max - min) + min);
}

let carta1 = generateRandom(1, 8);
let carta2 = generateRandom(1, 8);
let carta3 = generateRandom(1, 8);
let carta4 = generateRandom(1, 8);
let carta5 = generateRandom(1, 8);
let carta6 = generateRandom(1, 8);
let carta7 = generateRandom(1, 8);

function Cards() {
  return (
    <Container className="d-flex gap-4 justify-content-center mx-auto">
      {cartas.map((element) => {
        if (
          element.id === carta1 ||
          element.id === carta2 ||
          element.id === carta3 ||
          element.id === carta4 ||
          element.id === carta5 ||
          element.id === carta6 ||
          element.id === carta7
        ) {
          return (
            <Card
              key={element.id}
              style={{ width: "18rem" }}
              className="cartas-general"
            >
              <div className="contenedor-card-img">
              <Card.Img variant="top" src={element.img} />
              </div>
              <Card.Body>
                <Card.Title> {element.title} </Card.Title>
                <Card.Text>{element.text}</Card.Text>
              </Card.Body>
            </Card>
          );
        }
      })}
    </Container>
  );
}

export function CrearCard(props) {
  return (
    <>
      <Container className="d-flex gap-4 justify-content-center mx-auto">
        <Card
          key={props.element.id}
          style={{ width: "18rem" }}
          className="cartas-general"
        >
          <Card.Img variant="top" src={props.element.img} />
          <Card.Body>
            <Card.Title> {props.element.title} </Card.Title>
            <Card.Text>{props.element.text}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Cards;
