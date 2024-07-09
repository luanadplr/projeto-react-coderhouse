import "./Item.css"
import { NavLink } from "react-router-dom"

export default function Item({nome, stock, id}){
    return(
        <div className="itemBase">
            <div className="cadaItem">
                <div className="testeImagem"></div>
                <NavLink to={`/produto/${id}`} style={{textDecoration: "none"}}>
                    <p className="nomeProduto">{nome}</p>
                </NavLink>
                <p className="Stock">Somente {stock} disponíveis</p>
                <p className="precoProduto">R$0,00</p>
            </div>
        </div>
    )
}