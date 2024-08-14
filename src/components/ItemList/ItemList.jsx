import { useEffect } from "react"
import Item from "../Item/Item"

export default function ItemList({produtos, category}){

    const estiloLista = {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center"
    }

    return(
        <div style={estiloLista}>
            {produtos.map((produto=>
                <Item key={produto.id} 
                    nome={produto.nome} 
                    stock={produto.estoque} 
                    id={produto.id}
                    preco={produto.preco}
                    category={category}/>
            ))}
        </div>
    )
}