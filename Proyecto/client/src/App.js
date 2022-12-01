import "./componentes/app.css";
import Appbar from "./componentes/Nav/Appbar";
import HomePage from "./componentes/HomePage";
import Footer from "./componentes/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./componentes/RegisterPage";
import SignInPage from "./componentes/SignInPage";
import { Compartir } from "./componentes/Sharecito/Share";
import ProductosPage from "./componentes/ProductosPage";
import CartPage from "./componentes/CartPage";
import { IPhone } from "./componentes/PaginasFiltro/iPhone";
import { IPad } from "./componentes/PaginasFiltro/iPad";
import { IWatch } from "./componentes/PaginasFiltro/iWatch";
import { CartProvider } from "react-use-cart";
import CreatePage from "./componentes/CreatePage";
const App = () => {
  
  return (
    <>
      <div className="container-app">
        <CartProvider>
          <Appbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/productos" element={<ProductosPage />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/iphone" element={<IPhone />} />
              <Route path="/ipad" element={<IPad />} />
              <Route path="/iwatch" element={<IWatch />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </BrowserRouter>
          <Compartir />
          <Footer />
        </CartProvider>
      </div>
    </>
  );
};
export default App;
