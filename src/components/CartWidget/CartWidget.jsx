import FeatherIcon from "feather-icons-react"
import { NavLink } from "react-router-dom"

export default function CartWidget(){
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
                <span style={estiloSpan}>0</span>
            </NavLink>
        </div>
    )
}