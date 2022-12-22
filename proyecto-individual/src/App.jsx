import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/Navbar/Navbar';
import LoginPage from './Pages/LoginPage';
import HomePage from "./Pages/HomePage"
import SneakerPage from "./Pages/SneakerPage";

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/sneakers" element={<SneakerPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
