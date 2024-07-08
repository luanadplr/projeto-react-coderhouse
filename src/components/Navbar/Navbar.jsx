import { NavLink, Link } from "react-router-dom"
import  "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

export default function Navbar(){
    return(
        <div className="Navbar">
            <div className="Navbar_Logo">
                <Link to={"/"} className="Link">Home</Link>
            </div>
            <ul className="Navbar_Links">
                <li><Link to={"/produtos"} className="Link">Produtos</Link></li>
                <li><CartWidget/></li>
            </ul>
        </div>
    )
}