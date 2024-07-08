import { useState } from "react"
import ItemCount from "../../components/ItemCount/ItemCount"
import { Link } from "react-router-dom"
import FeatherIcon from "feather-icons-react"
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
            <Link to={"/produtos"}><FeatherIcon icon="arrow-left"/></Link>
            <ItemCount 
                contador = {contador} 
                add = {addProduto} 
                remove = {removeProduto}/>
            <button>Adicionar ao Carrinho</button>
        </div>
    )
}