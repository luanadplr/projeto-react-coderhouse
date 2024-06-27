import "./ItemList.css"

export default function ItemList({contador, setContador, stock, setCarrinho}){

    function addProduto(){
        if (contador < stock) setContador(contador+1)
    }
    
    function removeProduto(){
        if(contador > 0) setContador(contador-1)
    }

    return(
        <div className="itemList">
            <div>
                <button onClick={removeProduto} className="addRemove">-</button>
                <span>{contador}</span>
                <button onClick={addProduto} className="addRemove">+</button>
            </div>
            <p className="stock">Apenas {stock} disponível</p>
            <div>
                <button onClick={setCarrinho} id="adicionarCarrinho">Adicionar ao carrinho</button>
            </div>
        </div>
    )
}