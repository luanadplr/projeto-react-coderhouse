import { initializeApp } from "firebase/app"
import { addDoc, collection, doc, getDocs, getFirestore, query, snapshotEqual, where } from "firebase/firestore"

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
  {nome: "Hello", idCategory: "MAMAMOO", preco: 185, estoque: 5, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/hello.jpeg?raw=true"},
  {nome: "Piano Man", idCategory: "MAMAMOO", preco: 185, estoque: 5, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/piano-man.jpeg?raw=true"},
  {nome: "Pink Funky", idCategory: "MAMAMOO", preco: 185, estoque: 5, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/pink-funky.jpeg?raw=true"},
  {nome: "Melting", idCategory: "MAMAMOO", preco: 190, estoque: 20, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/melting.jpeg?raw=true"},
  {nome: "Memory", idCategory: "MAMAMOO", preco: 190, estoque: 15, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/memory.jpg?raw=true"},
  {nome: "Purple", idCategory: "MAMAMOO", preco: 165, estoque: 190, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/purple.jpeg?raw=true"},
  {nome: "Yellow Flower", idCategory: "MAMAMOO", preco: 210, estoque: 22, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/yellow-flower.jpg?raw=true"},
  {nome: "Red Moon", idCategory: "MAMAMOO", preco: 210, estoque: 25, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/red-moon.jpeg?raw=true"},
  {nome: "Blue;s", idCategory: "MAMAMOO", preco: 210, estoque: 19, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/blues.jpeg?raw=true"},
  {nome: "White Wind", idCategory: "MAMAMOO", preco: 210, estoque: 30, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/white-wind.jpeg?raw=true"},
  {nome: "Reality in Black", idCategory: "MAMAMOO", preco: 250, estoque: 80, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/reality-in-black.png?raw=true"},
  {nome: "Travel", idCategory: "MAMAMOO", preco: 190, estoque: 120, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/travel.jpeg?raw=true"},
  {nome: "WAW", idCategory: "MAMAMOO", preco: 190, estoque: 5, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/waw.jpg?raw=true"},
  {nome: "MIC ON", idCategory: "MAMAMOO", preco: 185, estoque: 15, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/mic-on.jpeg?raw=true"}
]

const produtosWheein = [
  {nome: "Magnolia", idCategory: "wheein", preco: 690, estoque: 1, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/magnolia.jpeg?raw=true"},
  {nome: "Soar", idCategory: "wheein", preco: 450, estoque: 1, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/soar.jpeg?raw=true"},
  {nome: "Redd", idCategory: "wheein", preco: 210, estoque: 6, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/redd.jpeg?raw=true"},
  {nome: "WHEE", idCategory: "wheein", preco: 185, estoque: 16, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/whee.jpeg?raw=true"},
  {nome: "IN The Mood", idCategory: "wheein", preco: 185, estoque: 78, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/in-the-mood.jpeg?raw=true"}
]

const produtosSolar = [
  {nome: "Spit It Out", idCategory: "solar", preco: 210, estoque: 15, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/spit-it-out.jpeg?raw=true"},
  {nome: "FACE", idCategory: "solar", preco: 190, estoque: 11, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/face.jpeg?raw=true"},
  {nome: "COLOURS", idCategory: "solar", preco: 165, estoque: 190, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/colours.jpeg?raw=true"}
]

const produtosHwasa = [
  {nome: "Maria", idCategory: "hwasa", preco: 310, estoque: 3, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/maria.jpeg?raw=true"},
  {nome: "Twit", idCategory: "hwasa", preco: 210, estoque: 5, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/twit.jpeg?raw=true"},
  {nome: "Guilty Pleasure", idCategory: "hwasa", preco: 210, estoque: 3, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/guilty%20pleasure.jpeg?raw=true"},
]

const produtosMoonbyul = [
  {nome: "LUNATIC", idCategory: "moonbyul", preco: 190, estoque: 15, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/6quence.jpeg?raw=true"},
  {nome: "Eclipse", idCategory: "moonbyul", preco: 190, estoque: 20, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/eclipse.jpeg?raw=true"},
  {nome: "C.I.T.T", idCategory: "moonbyul", preco: 80, estoque: 120, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/citt.jpeg?raw=true"},
  {nome: "Selfish", idCategory: "moonbyul", preco: 250, estoque: 1, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/selfish.jpeg?raw=true"},
  {nome: "Starlit of Muse", idCategory: "moonbyul", preco: 190, estoque: 28, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/starlit-of-muse.jpeg?raw=true"},
  {nome: "The Present", idCategory: "moonbyul", preco: 70, estoque: 5, img: "https://github.com/luanadplr/projeto-react-coderhouse/blob/master/src/img/imgs/the-present.jpeg?raw=true"}
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

// const poucoEstoque = query(collection(db, "mamamoo"), where("estoque", "<", "10"))
// getDocs(poucoEstoque).then((snapshot)=>{
//   if(snapshot.size === 0) console.log("No")
  
// })
