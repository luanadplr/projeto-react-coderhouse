import ItemList from "../../components/ItemList/ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"
import Foto from "../../img/imgs/mamamooot4.jpg"

export default function ItemListContainer(){

    const {category} = useParams()
    const [produtos, setProdutos] = useState([])

    function minhaPromise(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(
                    [
                    {id: 1, nome: "Yellow Flower", stock: 2, category: "MAMAMOO", description: "MAMAMOO (em coreano: hangul: 마마무) é um grupo feminino sul-coreano formado pela RBW Entertainment em 2014. O grupo é formado por quatro integrantes: Solar, Moonbyul, Wheein e Hwasa e teve sua estreia oficial em 18 de junho de 2014."},
                    {id: 2, nome: "Red Moon", stock: 3, category: "wheein", description: "Jung Whee-in (em coreano: hangul: 정휘인) é uma cantora sul-coreana. Teve sua estreia em 2014 como integrante do grupo MAMAMOO. Em Abril de 2018, realizou seu debut como artista solo com seu digital single [EASY]."},
                    {id: 3, nome: "Blue;s", stock: 5, category: "solar"},
                    {id: 4, nome: "White Wind", stock: 6, category: "moonbyul"},
                    {id: 5, nome: "MARIA", stock: 2, category: "hwasa"}
                ])
            },10)
        })
    }

    useEffect(()=>{
        minhaPromise()
            .then(sucesso => {
                let totalProdutos
                if (category) { totalProdutos = sucesso.filter((produtos)=> produtos.category === category) }
                else { totalProdutos = sucesso }
                setProdutos(totalProdutos)
            })
    },[category])

    return(
        <div>
            <div className="bannerProdutos">
                <div className="txtProdutos">
                    <h2 className="tituloCategoria">{category}</h2>
                    <p className="txtDescricao">{produtos.map(produto => produto.description)}</p>
                </div>
            </div>
            <div className="listagemProdutos">
                <h3 className="tituloProdutos"><span className="txtCategoria">GRUPO → </span> TODOS OS PRODUTOS</h3>
                <div><ItemList produtos={produtos}/></div>
            </div>
        </div>
    )
}