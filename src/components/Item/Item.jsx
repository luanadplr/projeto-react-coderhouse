import "./Item.css"
import { NavLink } from "react-router-dom"

export default function Item({nome, stock, id, category, preco}){
    return(
        <div className="itemBase">
            <div className="cadaItem">
                <div className="testeImagem"></div>
                <NavLink to= {`/produto/${category}/${id}`}
                    style={{textDecoration: "none"}}
                    state={{
                        nomeProduto: nome,
                        stockProduto: stock,
                        precoProduto: preco,
                        categoriaProduto: category
                    }}>
                        <p className="nomeProduto">{nome}</p>
                </NavLink>
                <p className="Stock">Somente {stock} disponíveis</p>
                <p className="precoProduto">R$ {preco}</p>
            </div>
        </div>
    )
}