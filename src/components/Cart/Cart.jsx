import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export default function Cart(){
    const {cart} = useContext(CartContext)

    return(
        <div>
            {cart.map(produto => (
                    <div key={`cart-${produto.id}`}>
                            <p>{produto.nome}</p>
                            <p>R$ {produto.preco}</p>
                            <p>Quantidade: {produto.quantidade}</p>
                    </div>
                ))}
        </div>
    )
}