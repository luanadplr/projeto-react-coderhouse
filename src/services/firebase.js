import { initializeApp } from "firebase/app"
import { addDoc, collection, getDocs, getFirestore, query, snapshotEqual, where } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBAE8wEQEODYGlCZ5wIYwulAvCVT6e1pEo",
  authDomain: "coderhouse-ecommerce-belismoo.firebaseapp.com",
  projectId: "coderhouse-ecommerce-belismoo",
  storageBucket: "coderhouse-ecommerce-belismoo.appspot.com",
  messagingSenderId: "14350372686",
  appId: "1:14350372686:web:6c2d8751b798f7f3d2981f"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
export default db

const produtosMamamoo = [
    {id: 1, nome: "Yellow Flower", estoque: 3, idCategory: "MAMAMOO", preco: 190},
    {id: 2, nome: "Red Moon", estoque: 3, idCategory: "MAMAMOO", preco: 190},
    {id: 3, nome: "Blue;s", estoque: 1, idCategory: "MAMAMOO", preco: 190},
    {id: 4, nome: "White Wind", estoque: 1, idCategory: "MAMAMOO", preco: 185},
    {id: 5, nome: "Reality In Black", estoque: 10, idCategory: "MAMAMOO", preco: 90},
    {id: 6, nome: "WAW", estoque: 280, idCategory: "MAMAMOO", preco: 100},
    {id: 7, nome: "MIC ON", estoque: 190, idCategory: "MAMAMOO", preco: 45},
    {id: 8, nome: "Melting", estoque: 2, idCategory: "MAMAMOO", preco: 220}
]

// ADICIONAR ITENS A COLEÇÃO DO FIRESTORE
// //  produtosMamamoo.forEach(async(obj) => {
// //      const docRef = await addDoc(collection(db, "mamamoo"), obj)
// //      console.log("Document written with ID: " + docRef.id)
// //  });

// PEGAR TODA A COLEÇÃO SEM FILTRO
// // const mamamooCollection = collection(db, "mamamoo")
// // getDocs(mamamooCollection).then((snapshot) => {
// //   console.log("snapshot:", snapshot.docs)
// //   snapshot.forEach((item) => console.log("Item ", item.id, " -> ", item.data()))
// // })

const poucoEstoque = query(collection(db, "mamamoo"), where("estoque", "<", "10"))
getDocs(poucoEstoque).then((snapshot)=>{
  if(snapshot.size === 0) console.log("No")
  
})
