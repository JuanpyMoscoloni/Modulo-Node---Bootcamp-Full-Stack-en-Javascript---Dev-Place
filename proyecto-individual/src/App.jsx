import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import NavBar from './components/Navbar/Navbar';
import LoginPage from './Pages/LoginPage';
import HomePage from "./Pages/HomePage"

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
