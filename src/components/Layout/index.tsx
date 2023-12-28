import NavBar from "../Navbar";
import { Outlet } from "react-router-dom";
import './Layout.css';

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <footer className="footer-pages">
       <span>Trybe - Todos os direitos reservados</span>
      </footer>
    </>    
  )
}

export default Layout;