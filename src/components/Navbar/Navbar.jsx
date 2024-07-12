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
                    <li><NavLink to={"/produtos/MAMAMOO"} 
                        className={({ isActive }) =>
                            isActive ? "Link menuLink menuAtivo" : "Link menuLink"
                        }>GRUPO</NavLink></li>
                    <li><NavLink to={"/produtos/solar"} 
                        className={({ isActive }) =>
                            isActive ? "Link menuLink menuAtivo" : "Link menuLink"
                        }>SOLAR</NavLink></li>
                    <li><NavLink to={"/produtos/moonbyul"} 
                        className={({ isActive }) =>
                            isActive ? "Link menuLink menuAtivo" : "Link menuLink"
                        }>MOONBYUL</NavLink></li>
                    <li><NavLink to={"/produtos/wheein"} 
                        className={({ isActive }) =>
                            isActive ? "Link menuLink menuAtivo" : "Link menuLink"
                        }>WHEEIN</NavLink></li>
                    <li><NavLink to={"/produtos/hwasa"} 
                        className={({ isActive }) =>
                            isActive ? "Link menuLink menuAtivo" : "Link menuLink"
                        }>HWASA</NavLink></li>
                </ul>
            </div>
        </div>
    )
}