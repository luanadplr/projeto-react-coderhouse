import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx"
import ItemList from './components/ItemList/ItemList.jsx'
import { useState } from 'react'

export default function App() {

  const [contador,setContador] = useState(0)

  function addProduto(){
    setContador(contador+1)
  }

  function removeProduto(){
    if(contador>0) setContador(contador-1)
  }

  let [contadorCart, setCarrinho] = useState(0)
  function contadorCarrinho(){
    setCarrinho(contadorCart = contadorCart+contador)
  }

  return (
    <div className="App">
      <Navbar logoName = "lima" valorCarrinho={contadorCart}/>
      <ItemList contador={contador} addProduto={addProduto} remProduto={removeProduto} setCarrinho={contadorCarrinho}/>
    </div>
  );
}
