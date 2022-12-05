import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import { Titulo } from "../Titulos/Titulo";
import BotonFiltro from "../Productos/BotonFiltro";
import { CreateCard } from "../Productos/CardsProductos";
export function IPad() {
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
            if (productItem.type === "iPad") {
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
