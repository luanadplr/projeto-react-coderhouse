import "./Item.css"
import { NavLink } from "react-router-dom"

export default function Item({nome, stock, id}){
    return(
        <div className="itemBase">
            <div>
                <p className="nomeProduto">{nome}</p>
                <p className="Stock">Somente {stock} disponíveis</p>
                <NavLink to={`/produto/${id}`}>
                    <button>Ver detalhes</button>
                </NavLink>
            </div>
        </div>
    )
}