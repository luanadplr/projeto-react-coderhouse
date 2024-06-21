import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

export default function App() {
  return (
    <div className="App">
      <Navbar logoName = "lima"/>
      <ItemListContainer greeting="PIN PERSONALIZADO"/>
    </div>
  );
}
