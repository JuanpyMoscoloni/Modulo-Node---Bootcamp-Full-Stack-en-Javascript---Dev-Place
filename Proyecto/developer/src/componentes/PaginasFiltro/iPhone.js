import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cartas from "../data/data"
import { MDBIcon } from 'mdb-react-ui-kit';
import { Titulo } from "../Titulos/Titulo";
import BotonFiltro from "../Productos/BotonFiltro";
import { CreateCard } from "../Productos/CardsProductos";
export function IPhone() {
  return (
    <>
      <Titulo />
      <BotonFiltro />
      <CardGroup className="card-group">
        <Row className="justify-content-lg-around">
          {cartas.map((productItem) => {
            if (productItem.categoria === "iPhone") {
              return (
                <CreateCard
                  key={productItem.id}
                  img={productItem.img}
                  title={productItem.title}
                  price={productItem.price}
                  item={productItem}
                />
              );
            }
          })}
        </Row>
      </CardGroup>
    </>
  );
}