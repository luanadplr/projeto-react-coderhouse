import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export default function ItemCount({stock}){

    const {contador, addContador, removeContador, setStock} = useContext(CartContext)
    setStock(stock)

    const styleBotao = {
        background: "none",
        border: "none",
        cursor: "pointer",
        fontWeight: 700,
        fontSize: "15px"
    }

    const styleBotaoDiminuir = {
        background: "none",
        border: "none",
        cursor: "pointer",
        fontWeight: 700,
        fontSize: "15px",
        color: "black"
    }

    if (contador == 0 || contador == 1) {
        styleBotaoDiminuir.cursor = "not-allowed"
        styleBotaoDiminuir.color = "grey"
    } if (contador == stock) {
        styleBotao.cursor = "not-allowed"
        styleBotao.color = "grey"
    }

    return(
        <div className="count-divPrincipal">
            <button onClick={removeContador} className="btn" style={styleBotaoDiminuir}>-</button>
            <span className="count">{contador}</span>
            <button onClick={addContador} className="btn btnSoma" style={styleBotao}>+</button>
        </div>
    )
}