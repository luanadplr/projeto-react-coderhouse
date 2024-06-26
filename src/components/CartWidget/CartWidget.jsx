import React from "react"
import FeatherIcon from 'feather-icons-react'
import "./CartWidget.css"

export default function CartWidget({valorCarrinho}){
    return(
        <div>
            <FeatherIcon icon="shopping-cart"/>
            <span className="valorCarrinho">{valorCarrinho}</span>
        </div>
    )
}