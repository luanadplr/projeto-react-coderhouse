import React from "react"
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

export default function Navbar({logo, logoName, valorCarrinho}) {
    return(<div>
        <nav className="Menu">
            <div id="divLogo">
                <img src={logo} className="logo-lima"/>
                <h1>{logoName}</h1>
            </div>
            <ul className="menu-Ul">
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Sobre</a></li>
                <li><CartWidget valorCarrinho = {valorCarrinho}/></li>
            </ul>
        </nav>
    </div>)
}