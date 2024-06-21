import React from "react"
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

export default function Navbar({logoName}) {
    return(<div>
        <nav className="Menu">
            <h1>{logoName}</h1>
            <ul className="menu-Ul">
                <li>Produtos</li>
                <li>Sobre</li>
                <CartWidget/>
            </ul>
        </nav>
    </div>)
}