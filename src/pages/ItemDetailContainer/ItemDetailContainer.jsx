import ItemCount from "../../components/ItemCount/ItemCount"
import { Link, useParams } from "react-router-dom"
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
            <div className="itemlistctn-produtosLista">
                <h3 className="itemlistctn-produtoTitulo">
                    <span className="txtCategoria">
                        <Link to={`/produtos/${category}`}>VOLTAR →</Link>
                    </span> {produto.nome}
                </h3>
            </div>
            <div className="itemdetailctn-produtoInfo">
                <div>
                    <div className="teste">
                        <img src={produto.img} className="produtoImg-Details"/>
                    </div>
                </div>
                <div className="produtoInfo">
                    <h3>{produto.nome}</h3>
                    <h2>R$ {produto.preco}</h2>
                    <div className="produtoQuantidade">
                        <p style={{fontSize: "12px", opacity: 0.7}}>Quantidade</p>
                        <ItemCount stock = {produto.estoque}/>
                    </div>
                    <button onClick={addItem} className="button">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    )
}