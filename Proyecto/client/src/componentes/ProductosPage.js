import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/react-fontawesome";
import "bootstrap-css-only/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import BotonFiltro from "./Productos/BotonFiltro";
import { Titulo } from "./Titulos/Titulo";
import Form from "react-bootstrap/Form";
import { CreateCard } from "./Productos/CardsProductos";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import axios from "axios";

function ProductosPage() {
  let productosFiltrados = [];
  const [busqueda, setBusqueda] = useState("");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function productosDB() {
      const res = await axios.get("http://localhost:5050/productos");
      setProducts(res.data);
    }
    productosDB();
  }, []);

  
  

  function buscarProduct(e) {
    setBusqueda(e.target.value.toLowerCase());
  }

  if (busqueda) {
    productosFiltrados = products.filter((a) =>
      a.title.toLowerCase().includes(busqueda)
    );
  }
  return (
    <>
      <Titulo />
      <Row>
        <Col></Col>
        <Col>
          <Form className="d-flex container-form me-2 input-search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 input-search"
              aria-label="Search"
              onChange={buscarProduct}
            />
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <BotonFiltro />
      <CardGroup className="card-group">
        <Row>
          {busqueda
            ? productosFiltrados.map((productItem) => {
                return (
                  <CreateCard
                    id={productItem._id}
                    img={productItem.img}
                    title={productItem.title}
                    price={productItem.price}
                    
                  />
                );
              })
            : products.map((element) => {
                return (
                  <CreateCard
                    id={element._id}
                    img={element.img}
                    title={element.title}
                    price={element.price}
                    
                  />
                );
              })}
        </Row>
      </CardGroup>
    </>
  );
}

export default ProductosPage;
