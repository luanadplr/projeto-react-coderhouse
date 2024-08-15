import ItemList from "../../components/ItemList/ItemList"
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import ImgMAMAMOO from "../../img/imgs/mamamooot4.jpeg"
import ImgSolar from "../../img/imgs/mamamoosolar.jpeg"
import ImgMoonbyul from "../../img/imgs/mamamoomoonbyul.jpeg"
import ImgWheein from "../../img/imgs/mamamoowheein.jpeg"
import ImgHwasa from "../../img/imgs/mamamoohwasa.jpeg"
import { collection, getDocs } from "firebase/firestore"
import db from "../../services/firebase"

export default function ItemListContainer(){

    const {category} = useParams()
    const [produtos, setProdutos] = useState([])

    useEffect(()=>{
        newPromise()
            .then(sucesso=>{
                const listaCategorias = sucesso.filter((categoria) => categoria.id_Category === category)
                setCategorias(listaCategorias)
            })

        pegarProdutos()
    },[category])

// EXIBIR LISTA DE PRODUTOS DO FIRESTORE DE ACORDO COM A CATEGORIA
    const pegarProdutos = () => {
        const colecaoProdutos = collection(db, category)
        getDocs(colecaoProdutos).then((snapshot)=>{
            setProdutos(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })
    }

// ADICIONAR A DESCRIÇÃO DE CADA CATEGORIA
    const [categorias, setCategorias] = useState([])

    function newPromise(){
        return new Promise((resolve, reject) => {
            resolve([
                {
                    id_Category: "mamamoo",
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

// MUDAR O BACKGROUND DO BANNER PRINCIPAL
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
            <div style={backgroundStyle} className="itemlistctn-banner">
                <div className="itemlistctn-bannerTextos">
                    <h2 className="itemlistctn-txtCategoria">{category}</h2>
                    <p className="itemlistctn-txtDescricao">{categorias.map(descricao => descricao.description)}</p>
                </div>
            </div>
            <div className="itemlistctn-produtosLista">
                <h3 className="itemlistctn-produtoTitulo"><span className="txtCategoria">{category} → </span> TODOS OS PRODUTOS</h3>
                <div className="itemlistctn-produtos">
                    <div><ItemList produtos={produtos} category={category}/></div>
                </div>
            </div>
        </div>
    )
}