import { useContext, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import FeatherIcon from "feather-icons-react"

export default function Cart(){
    const {cart, removerItem, limparCarrinho, cartTotal} = useContext(CartContext)

    return(
        <div className="cart-divPrincipal">
            <h3 className="h3 h3-cart">Carrinho</h3>
            {cart.length === 0 && (<h2>Carrinho de compras vazio.</h2>)}
            {cart.map(produto => (
                <div className="cart-produto">
                    <div className="cart-produtoInfo">
                        <div className="testeImagem"><img src={produto.img} className="itemImg"/></div>
                        <div className="cart-produtoDetails">
                            <h2 className="h2-cart">{produto.nome}</h2>
                            <p className="txtCategoria">{produto.idCategory}</p>
                            <p className="txtQtd">Quantidade: {produto.quantidade}</p>
                        </div>
                    </div>
                    <div className="cart-preco-trash">
                        <h2 className="h2-cart cart-preco">R$ {produto.preco}</h2>
                        <button onClick={()=>removerItem(produto.id)} className="btn-trash"><FeatherIcon icon="trash-2" className="trash"></FeatherIcon></button>
                    </div>
                </div>
                ))}
            <div>
                <p>Total</p>
                <h2>R$ {cartTotal()}</h2>
                <p className="p-frete">Frete Grátis</p>
                <button className="button btn-order" onClick={limparCarrinho}>Finalizar compra</button>
            </div>
        </div>
    )
}