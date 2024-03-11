import { Outlet, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './styles/Layout.css'

function Layout() {

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
const myFunction = () => {
  let x = document.getElementByClassName("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

    return (
      <>
      <Header />
        <nav className="topnav myTopnav">
          <ul>
            <li>
              <Link to="/" className="active">Inicio</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/herramientas">Herramientas</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="javascript:void(0);" className="icon" onClick={myFunction}>
              <i className="fa fa-bars"></i>
              </Link>
            </li>
          </ul>
        </nav>

        <Outlet />
        <Footer />
      </>
    )
  }
  
  export default Layout