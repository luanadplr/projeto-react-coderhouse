import { createContext, useEffect, useState } from "react"

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
    setContador(0)
  }

  // FUNÇÃO PARA VERIFICAR E ENVIAR O ITEM AO CARRINHO
  const [cart, setCart] = useState([])

  function isInCart(itemId){
    return cart.some(item=>item.id===itemId)
  }

  function adicionarItem(item){
    if(isInCart(item.id)){
      setCart(prevCart=>{
        const atualizarCarrinho = prevCart.map(obj=>
          obj.id === item.id ? { ...obj, quantidade: obj.quantidade + item.quantidade } : obj
        )
        return atualizarCarrinho
      })
    } else {
      setCart([...cart, item])  
    }
    modificarCarrinho() 
  }


  return(
    <CartContext.Provider value={{contador, stock, setStock, addContador, removeContador, countCarrinho, cart, adicionarItem}}>
      {children}
    </CartContext.Provider>
  )
}