import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import SneakerPage from "./Pages/SneakerPage";
import RegisterPage from "./Pages/RegisterPage";
import CartPage from "./Pages/CartPage";
import { CartProvider } from "react-use-cart";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <CartProvider id="my-cart">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/sneakers" element={<SneakerPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </CartProvider>
    </>
  );
}

export default App;
