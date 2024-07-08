import { useEffect, useState } from "react"
import Item from "../Item/Item"
import "./ItemList.css"

export default function ItemList(){

    const [produtos, setProdutos] = useState([])

    function minhaPromise(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve([
                    {id: 1, nome: "Yellow Flower", stock: 2},
                    {id: 2, nome: "Red Moon", stock: 3},
                    {id: 3, nome: "Blue;s", stock: 5},
                    {id: 4, nome: "White Wind", stock: 6}
                ])
            },1000)
        })
    }

    useEffect(()=>{
        minhaPromise()
            .then(sucesso => {
                const totalProdutos = sucesso.map((produtos)=> produtos)
                setProdutos(totalProdutos)
            })
    },[])

    return(
        <div className="listaProdutos">
            {produtos.map((produto=>
                <Item key={produto.id} nome={produto.nome} stock={produto.stock} id={produto.id}/>
            ))}
        </div>
    )
}