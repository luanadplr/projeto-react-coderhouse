import { useState } from "react"
import ItemCount from "../../components/ItemCount/ItemCount"
import { Link, useLocation } from "react-router-dom"
import "./ItemDetailContainer.css"

export default function ItemDetailContainer(){

    // Funções para o adicionar e remover
    // a quantidade de itens no contador do Item Count

    const [contador, setContador] = useState(1)

    function addProduto() { 
        if (contador < stockProduto) setContador(contador+1) }
    function removeProduto() { 
        if (contador > 0) setContador(contador-1)
    }

    // Pegar os props passados pelo NavLink

    let location = useLocation()
    const {nomeProduto} = location.state
    const {stockProduto} = location.state

    return(
        <div>
            <div className="listagemProdutos">
                <h3 className="tituloProdutos">
                    <span className="txtCategoria">
                        <Link to={"/produtos"}
                            style={{
                                textDecoration: "none",
                                color: "black"}}>VOLTAR → 
                        </Link>
                    </span> {nomeProduto}
                </h3>
            </div>
            <div className="informacoesProduto">
                <div className="imagemProduto">
                    <div className="testeImagemDois"></div>
                </div>
                <div className="infosProdutos">
                    <h3 className="nome_Produto">{nomeProduto}</h3>
                    <h2 className="preco_Produto">R$ 0,00</h2>
                    <div className="quantidade_Produto">
                        <p style={{fontSize: "12px", opacity: 0.7}}>Quantidade</p>
                        <ItemCount 
                            contador = {contador} 
                            add = {addProduto} 
                            remove = {removeProduto}
                            stock = {stockProduto}/>
                    </div>
                    <button className="btn_AdicionarCarrinho">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    )
}