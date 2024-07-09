import ItemList from "../../components/ItemList/ItemList"
import "./ItemListContainer.css"

export default function ItemListContainer(){


    return(
        <div>
            <div className="bannerProdutos">
                <div className="txtProdutos">
                    <h2>MAMAMOO</h2>
                    <p className="txtDescricao">MAMAMOO (em coreano: hangul: 마마무) é um grupo feminino sul-coreano formado pela RBW Entertainment em 2014. O grupo é formado por quatro integrantes: Solar, Moonbyul, Wheein e Hwasa e teve sua estreia oficial em 18 de junho de 2014.</p>
                </div>
            </div>
            <div className="listagemProdutos">
                <h3 className="tituloProdutos"><span className="txtCategoria">GRUPO → </span> TODOS OS PRODUTOS</h3>
                <div><ItemList/></div>
            </div>
        </div>
    )
}