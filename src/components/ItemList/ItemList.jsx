import Item from "../Item/Item"

export default function ItemList({produtos}){

    const estiloLista = {
        display: "flex"
    }

    return(
        <div style={estiloLista}>
            {produtos.map((produto=>
                <Item key={produto.id} 
                    nome={produto.nome} 
                    stock={produto.stock} 
                    id={produto.id}/>
            ))}
        </div>
    )
}