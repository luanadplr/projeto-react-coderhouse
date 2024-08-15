import ItemCount from "../../components/ItemCount/ItemCount"
import { Link, useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { doc, getDoc } from "firebase/firestore"
import db from "../../services/firebase"

export default function ItemDetailContainer(){

    const {adicionarItem, contador} = useContext(CartContext)

// PEGAR OS DADOS DO PRODUTO DE DENTRO DO FIREBASE
    const [produto, setProduto] = useState([])
    const {category, id} = useParams()

    useEffect(()=>{
        pegarProduto()
    },[])

    function pegarProduto(){
        const produtoRef = doc(db, category, id)
        getDoc(produtoRef).then((item)=>{
            if(item.exists()){
                setProduto({id: item.id, ...item.data()})
            }
        })
    }

// FUNÇÃO PARA ENVIAR OS DADOS DO PRODUTO PARA O CART
    function addItem(){
        adicionarItem({
            ...produto,
            quantidade: contador
        })
    }

    return(
        <div>
            <div className="produtosLista">
                <h3 className="tituloProdutos">
                    <span className="txtCategoria">
                        <Link to={`/produtos/${category}`}
                            style={{
                                textDecoration: "none",
                                color: "black"}}>VOLTAR →
                        </Link>
                    </span> {produto.nome}
                </h3>
            </div>
            <div className="informacoesProduto">
                <div className="imagemProduto">
                    <div className="testeImagemDois"></div>
                </div>
                <div className="infosProdutos">
                    <h3 className="nome_Produto">{produto.nome}</h3>
                    <h2 className="preco_Produto">R$ {produto.preco}</h2>
                    <div className="quantidade_Produto">
                        <p style={{fontSize: "12px", opacity: 0.7}}>Quantidade</p>
                        <ItemCount stock = {produto.estoque}/>
                    </div>
                    <button onClick={addItem} className="btn_AdicionarCarrinho">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    )
}