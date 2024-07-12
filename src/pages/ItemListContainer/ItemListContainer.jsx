import ItemList from "../../components/ItemList/ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"
import ImgMAMAMOO from "../../img/imgs/mamamooot4.jpeg"
import ImgSolar from "../../img/imgs/mamamoosolar.jpeg"
import ImgMoonbyul from "../../img/imgs/mamamoomoonbyul.jpeg"
import ImgWheein from "../../img/imgs/mamamoowheein.jpeg"
import ImgHwasa from "../../img/imgs/mamamoohwasa.jpeg"

export default function ItemListContainer(){

    const {category} = useParams()
    const [produtos, setProdutos] = useState([])
    const [categorias, setCategorias] = useState([])

    function minhaPromise(){
        return new Promise((resolve, reject)=>{
                resolve(
                    [
                    {id: 1, nome: "Yellow Flower", stock: 2, category: "MAMAMOO"},
                    {id: 2, nome: "Red Moon", stock: 3, category: "wheein"},
                    {id: 3, nome: "Blue;s", stock: 5, category: "solar"},
                    {id: 4, nome: "White Wind", stock: 6, category: "moonbyul"},
                    {id: 5, nome: "MARIA", stock: 2, category: "hwasa"}
                ])
        })
    }

    function newPromise(){
        return new Promise((resolve, reject) => {
            resolve([
                {
                    id_Category: "MAMAMOO",
                    description: "MAMAMOO (em coreano: hangul: 마마무) é um grupo feminino sul-coreano formado pela RBW Entertainment em 2014. O grupo é formado por quatro integrantes: Solar, Moonbyul, Wheein e Hwasa e teve sua estreia oficial em 18 de junho de 2014."
                },
                {
                    id_Category: "solar",
                    description: "SOLAR (em coreano: hangul: 마마무) é um grupo feminino sul-coreano formado pela RBW Entertainment em 2014. O grupo é formado por quatro integrantes: Solar, Moonbyul, Wheein e Hwasa e teve sua estreia oficial em 18 de junho de 2014."
                },
                {
                    id_Category: "moonbyul",
                    description: "MOONBYUL (em coreano: hangul: 마마무) é um grupo feminino sul-coreano formado pela RBW Entertainment em 2014. O grupo é formado por quatro integrantes: Solar, Moonbyul, Wheein e Hwasa e teve sua estreia oficial em 18 de junho de 2014."
                },
                {
                    id_Category: "wheein",
                    description: "Jung Whee-in (em coreano: hangul: 정휘인) é uma cantora sul-coreana. Teve sua estreia em 2014 como integrante do grupo MAMAMOO. Em Abril de 2018, realizou seu debut como artista solo com seu digital single [EASY]."
                },
                {
                    id_Category: "hwasa",
                    description: "HWASA (em coreano: hangul: 마마무) é um grupo feminino sul-coreano formado pela RBW Entertainment em 2014. O grupo é formado por quatro integrantes: Solar, Moonbyul, Wheein e Hwasa e teve sua estreia oficial em 18 de junho de 2014."
                }
            ])
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

        newPromise()
            .then(sucesso=>{
                const listaCategorias = sucesso.filter((categoria) => categoria.id_Category === category)
                setCategorias(listaCategorias)
            })
    },[category])

    const backgroundStyle = {
        backgroundImage: `url(${ImgMAMAMOO})`
    }

    if(category === "solar") {
        backgroundStyle.backgroundImage = `url(${ImgSolar})`
    } else if (category === "moonbyul") {
        backgroundStyle.backgroundImage = `url(${ImgMoonbyul})`
    } else if (category === "wheein") {
        backgroundStyle.backgroundImage = `url(${ImgWheein})`
    } else if (category === "hwasa") { backgroundStyle.backgroundImage = `url(${ImgHwasa})`}

    return(
        <div>
            <div style={backgroundStyle} className="bannerProdutos">
                <div className="txtProdutos">
                    <h2 className="tituloCategoria">{category}</h2>
                    <p className="txtDescricao">{categorias.map(descricao => descricao.description)}</p>
                </div>
            </div>
            <div className="listagemProdutos">
                <h3 className="tituloProdutos"><span className="txtCategoria">{category} → </span> TODOS OS PRODUTOS</h3>
                <div><ItemList produtos={produtos}/></div>
            </div>
        </div>
    )
}