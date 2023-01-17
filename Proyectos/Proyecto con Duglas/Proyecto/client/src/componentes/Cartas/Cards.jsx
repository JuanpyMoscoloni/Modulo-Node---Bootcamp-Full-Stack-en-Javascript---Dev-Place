import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import { useEffect } from "react";
import axios from'axios';
import { CreateCard } from "../Productos/CardsProductos";
import { React, useState } from "react";




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
      
        })
      }
    </Container>
  );
}

export function CrearCard(props) {
  return (
    <>
      <Container className="d-flex justify-content-center mx-auto">
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
