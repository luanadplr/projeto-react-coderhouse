import { NavLink, Link } from "react-router-dom"
import  "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

export default function Navbar(){
    return(
        <div className="Navbar">
            <div className="Navbar_Logo">
                <Link to={"/"} className="Link logoTitulo">BELISMOO STORE</Link>
                <CartWidget/>
            </div>
            <div>
                <ul className="Navbar_Links">
                    <li><Link to={"/produtos"} className="Link menuLink">GRUPO</Link></li>
                    <li><Link to={"/produtos"} className="Link menuLink">SOLAR</Link></li>
                    <li><Link to={"/produtos"} className="Link menuLink">MOONBYUL</Link></li>
                    <li><Link to={"/produtos"} className="Link menuLink">WHEEIN</Link></li>
                    <li><Link to={"/produtos"} className="Link menuLink">HWASA</Link></li>
                </ul>
            </div>
        </div>
    )
}