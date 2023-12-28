import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import CoffeeList from "./pages/CoffeList/CoffeList";
import Coffee from "./pages/Coffee/Coffee";
import NavBar from "./components/Navbar";
import NotFound from "./pages/NotFound";

import './App.css'

function App() {
    return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/coffees" element={ <CoffeeList /> }></Route>
        <Route path="/coffees/:coffee" element={ <Coffee /> }></Route>
        <Route path="/*" element={ <NotFound /> }></Route>
      </Routes>
    </>
  )
}

export default App
