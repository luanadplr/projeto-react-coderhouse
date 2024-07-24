import FeatherIcon from "feather-icons-react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

export default function CartWidget(){

    const {countCarrinho} = useContext(CartContext)

    const estiloSpan = {
        backgroundColor: 'rgb(240, 97, 121)',
        borderRadius: '100%',
        padding: '5px',
        fontSize: '10px',
        color: 'white'
    }

    return(
        <div>
            <NavLink to={"/carrinho"} style={{textDecoration: "none", color: "black"}}>
                <FeatherIcon icon="shopping-cart"/>
                <span style={estiloSpan}>{countCarrinho}</span>
            </NavLink>
        </div>
    )
}