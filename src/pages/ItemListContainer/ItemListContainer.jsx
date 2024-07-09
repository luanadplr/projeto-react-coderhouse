import ItemList from "../../components/ItemList/ItemList"
import { useState, useEffect } from "react"
import "./ItemListContainer.css"

export default function ItemListContainer(){

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
        <div>
            <div className="bannerProdutos">
                <div className="txtProdutos">
                    <h2 className="tituloCategoria">MAMAMOO</h2>
                    <p className="txtDescricao">MAMAMOO (em coreano: hangul: 마마무) é um grupo feminino sul-coreano formado pela RBW Entertainment em 2014. O grupo é formado por quatro integrantes: Solar, Moonbyul, Wheein e Hwasa e teve sua estreia oficial em 18 de junho de 2014.</p>
                </div>
            </div>
            <div className="listagemProdutos">
                <h3 className="tituloProdutos"><span className="txtCategoria">GRUPO → </span> TODOS OS PRODUTOS</h3>
                <div><ItemList produtos={produtos}/></div>
            </div>
        </div>
    )
}