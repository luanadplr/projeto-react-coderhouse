import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

export default function Navbar(){
    return(
        <div className="navbar-divPrincipal">
            <div className="navbar-logo">
                <Link to={"/"} className="h3">BELISMOO STORE</Link>
                <CartWidget/>
            </div>
            <div>
                <ul className="navbar-linkList">
                    <li><NavLink to={"/produtos/mamamoo"} 
                        className={({ isActive }) =>
                            isActive ? "menuLink menuAtivo" : "menuLink"
                        }>GRUPO</NavLink></li>
                    <li><NavLink to={"/produtos/solar"} 
                        className={({ isActive }) =>
                            isActive ? "menuLink menuAtivo" : "menuLink"
                        }>SOLAR</NavLink></li>
                    <li><NavLink to={"/produtos/moonbyul"} 
                        className={({ isActive }) =>
                            isActive ? "menuLink menuAtivo" : "menuLink"
                        }>MOONBYUL</NavLink></li>
                    <li><NavLink to={"/produtos/wheein"} 
                        className={({ isActive }) =>
                            isActive ? "menuLink menuAtivo" : "menuLink"
                        }>WHEEIN</NavLink></li>
                    <li><NavLink to={"/produtos/hwasa"} 
                        className={({ isActive }) =>
                            isActive ? "menuLink menuAtivo" : "menuLink"
                        }>HWASA</NavLink></li>
                </ul>
            </div>
        </div>
    )
}