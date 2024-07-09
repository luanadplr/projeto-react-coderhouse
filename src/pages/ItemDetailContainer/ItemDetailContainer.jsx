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
                    <ItemCount 
                        contador = {contador} 
                        add = {addProduto} 
                        remove = {removeProduto}/>
                    <button>Adicionar ao Carrinho</button>
                </div>
            </div>
            <div className="detalhesProduto">
                <h2>Detalhes</h2>
            </div>
        </div>
    )
}