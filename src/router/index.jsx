import { Routes, Route } from "react-router-dom"
import Main from "../pages/Main/Main"
import ItemListContainer from "../pages/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../pages/ItemDetailContainer/ItemDetailContainer"

export default function Router(){
    return(
        <Routes>
            <Route exact path="/" element={<Main/>}/>
            {/*<Route exact path="/produtos" element={<ItemListContainer/>}/>*/}
            <Route exact path="/produtos/:category" element={<ItemListContainer/>}/>
            <Route exact path="/produto/:id" element={<ItemDetailContainer/>}/>
        </Routes>
    )
}