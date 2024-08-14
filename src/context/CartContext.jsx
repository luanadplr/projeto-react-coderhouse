import { createContext, useState } from "react"

export const CartContext = createContext()
export const CartProvider = ({children}) =>{

  // FUNÇÕES PARA O (+) E (-) DO ITEM COUNT
  const [contador, setContador] = useState(0)
  const [stock, setStock] = useState(0)
  function addContador() { if (contador < stock ) setContador(contador+1) } 
  function removeContador() { if (contador > 0) setContador(contador-1) }

  // FUNÇÃO PARA ADICIONAR O VALOR AO WIDGET DE CARRINHO
  let [countCarrinho, setCountCarrinho] = useState(0)
  function modificarCarrinho() {
    setCountCarrinho(countCarrinho = contador + countCarrinho)
  }

  return(
    <CartContext.Provider value={{contador, stock, setStock, addContador, removeContador, modificarCarrinho, countCarrinho}}>
      {children}
    </CartContext.Provider>
  )
}