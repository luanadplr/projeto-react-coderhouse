import { BrowserRouter } from "react-router-dom"
import Router from "./router"
import Navbar from "./components/Navbar/Navbar"
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}
