import { useState } from "react"
import ItemCount from "../../components/ItemCount/ItemCount"
import { Link } from "react-router-dom"
import "./ItemDetailContainer.css"

export default function ItemDetailContainer(){

    // Funções para o adicionar e remover
    // a quantidade de itens no contador do Item Count

    const [contador, useContador] = useState(1)

    function addProduto() { useContador(contador+1) }
    function removeProduto() { 
        if (contador > 0) useContador(contador-1)
    }

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
                    </span> NOME DO PRODUTO
                </h3>
            </div>
            <div className="informacoesProduto">
                <div className="imagemProduto">
                    <div className="testeImagemDois"></div>
                </div>
                <div className="infosProdutos">
                    <h3 className="nome_Produto">Nome do Produto</h3>
                    <h2 className="preco_Produto">R$ 0,00</h2>
                    <div className="quantidade_Produto">
                        <p style={{fontSize: "12px", opacity: 0.7}}>Quantidade</p>
                        <ItemCount 
                            contador = {contador} 
                            add = {addProduto} 
                            remove = {removeProduto}/>
                    </div>
                    <button className="btn_AdicionarCarrinho">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    )
}