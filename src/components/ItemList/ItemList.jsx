import Item from "../Item/Item"

export default function ItemList({produtos, category}){
    
    return(
        <div className="itemlist-Style">
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