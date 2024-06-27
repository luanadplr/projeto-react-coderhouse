import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx"
import ItemList from './components/ItemList/ItemList.jsx'
import { useState } from 'react'
import Logo from "./assets/imgs/icon-lima.png"

export default function App() {

  const [contador, setContador] = useState(1)

  // MOSTRAR A QUANTIDADE NO ICONE CARRINHO
  let [contadorCart, setCarrinho] = useState(0)
  function contadorCarrinho(){
    setCarrinho(contadorCart = contadorCart+contador)
  }
  //

  return (
    <div className="App">
      <Navbar logo={Logo} logoName = "lima" valorCarrinho={contadorCart}/>
      <ItemList contador={contador} setContador={setContador} setCarrinho={contadorCarrinho} stock={5}/>
    </div>
  );
}
