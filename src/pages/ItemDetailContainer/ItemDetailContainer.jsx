import ItemCount from "../../components/ItemCount/ItemCount"
import { Link, useLocation } from "react-router-dom"
import "./ItemDetailContainer.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export default function ItemDetailContainer(){

    const {modificarCarrinho} = useContext(CartContext)

// PEGAR OS PROPS PASSADOS POR NAVLINK
    let location = useLocation()
    const {nomeProduto} = location.state
    const {stockProduto} = location.state
    const {precoProduto} = location.state
    const {categoriaProduto} = location.state
//
    return(
        <div>
            <div className="produtosLista">
                <h3 className="tituloProdutos">
                    <span className="txtCategoria">
                        <Link to={`/produtos/${categoriaProduto}`}
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
                    <h2 className="preco_Produto">R$ {precoProduto}</h2>
                    <div className="quantidade_Produto">
                        <p style={{fontSize: "12px", opacity: 0.7}}>Quantidade</p>
                        <ItemCount stock = {stockProduto}/>
                    </div>
                    <button onClick={modificarCarrinho} className="btn_AdicionarCarrinho">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    )
}