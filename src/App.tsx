import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import CoffeeList from "./pages/CoffeList/CoffeList";
import Coffee from "./pages/Coffee/Coffee";
import NotFound from "./pages/NotFound";

import './App.css'
import Layout from "./components/Layout";

function App() {
    return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> }></Route>
          <Route path="/coffees" element={ <CoffeeList /> }></Route>
          <Route path="/coffees/:coffee" element={ <Coffee /> }></Route>
        </Route>
        <Route path="/*" element={ <NotFound /> }></Route>
      </Routes>
    </>
  )
}

export default App
