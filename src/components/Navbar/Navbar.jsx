import React from "react"
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

export default function Navbar({logoName, valorCarrinho}) {
    return(<div>
        <nav className="Menu">
            <h1>{logoName}</h1>
            <ul className="menu-Ul">
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Sobre</a></li>
            </ul>
            <CartWidget valorCarrinho = {valorCarrinho}/>
        </nav>
    </div>)
}