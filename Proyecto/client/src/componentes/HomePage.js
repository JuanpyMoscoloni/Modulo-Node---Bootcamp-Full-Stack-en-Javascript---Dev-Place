
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@fortawesome/react-fontawesome';
import "bootstrap-css-only/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import Carrusel from "./Calesita/Carrusel";
import Cards from "./Cartas/Cards";
import { Titulo } from "./Titulos/Titulo";
import Acordeon from "./Acordeon/Acordion";

function HomePage() {
  return (
    <>
        <Carrusel />
        <Titulo />
        <Cards />
        <Acordeon/>
    </>
  );
}

export default HomePage;