import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import { useEffect } from "react";
import axios from'axios';
import { CreateCard } from "../Productos/CardsProductos";
import { React, useState } from "react";


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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function productosDB() {
      const res = await axios.get("http://localhost:5050/productos");
      setProducts(res.data);
    }
    productosDB();
  }, []);
  return (
    <Container className="d-flex gap-4 justify-content-center mx-auto">
      {products.map((element) => {
        if (
          element.random === carta1 ||
          element.random === carta2 ||
          element.random === carta3 ||
          element.random === carta4 ||
          element.random === carta5 ||
          element.random === carta6 ||
          element.random === carta7 
        ) 
        {
          console.log(element.random);
          return (
            <CreateCard
                    id={element._id}
                    img={element.img}
                    title={element.title}
                    price={element.price}
                    random= {element.random}
                    
                  />
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
