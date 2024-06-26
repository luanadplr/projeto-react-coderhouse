import "./ItemList.css"

export default function ItemList({contador, addProduto, remProduto, setCarrinho}){
    return(
        <div className="itemList">
            <div>
                <button onClick={remProduto} className="addRemove">-</button>
                <span>{contador}</span>
                <button onClick={addProduto} className="addRemove">+</button>
            </div>
            <div>
                <button onClick={setCarrinho} id="adicionarCarrinho">Adicionar ao carrinho</button>
            </div>
        </div>
    )
}