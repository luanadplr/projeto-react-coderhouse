import { BrowserRouter } from "react-router-dom"
import Router from "./router"
import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import { CartProvider } from "./context/CartContext"
import db from "./services/firebase"
import Footer from "./components/Footer/Footer"

export default function App() {
  
  return (
      <div className="App">
            <CartProvider>
              <BrowserRouter>
                <Navbar/>
                <Router/>
                <Footer/>
              </BrowserRouter>
            </CartProvider>
      </div>
  );
}
