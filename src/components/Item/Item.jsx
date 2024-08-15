import { NavLink } from "react-router-dom"

export default function Item({nome, stock, id, category, preco}){
    return(
        <div className="itemBase">
            <div>
                <div className="testeImagem"></div>
                <NavLink to= {`/produto/${category}/${id}`}>
                        <p className="nomeProduto">{nome}</p>
                </NavLink>
                <p className="stockProduto">Somente {stock} disponíveis</p>
                <p className="precoProduto">R$ {preco}</p>
            </div>
        </div>
    )
}