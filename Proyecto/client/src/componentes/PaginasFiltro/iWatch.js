import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cartas from "../data/data"
import { MDBIcon } from 'mdb-react-ui-kit';
import { Titulo } from "../Titulos/Titulo";
import BotonFiltro from "../Productos/BotonFiltro";
import { CreateCard } from "../Productos/CardsProductos";
export function IWatch() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function productosDB() {
      const res = await axios.get("http://localhost:5050/productos");
      setProducts(res.data);
    }
    productosDB();
  }, []);

  return (
    <>
      <Titulo />
      <BotonFiltro />
      <CardGroup className="card-group">
        <Row className="justify-content-lg-around">
          {products.map((productItem) => {
            if (productItem.type === "iWatch") {
              return (
                <CreateCard
                key={productItem.id}
                img={productItem.img}
                title={productItem.title}
                price={productItem.price}
                type= {productItem.type}
                />
              );
            }
          })}
        </Row>
      </CardGroup>
    </>
  );
}