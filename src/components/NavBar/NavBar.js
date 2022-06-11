import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Container } from "@mui/material";
// import logoSite from '../img/QBR.jpeg'
const NavBar = () => {
  return (
    <Container>
      <nav className="nav">
        <div className="logo">
          <a href="/package-lock.json">
            <span className="nav_logo">QBR</span>
          </a>
        </div>
        <ul className="nav_list">
          <li className="nav_item nav_item-active">
            <a href="/package-lock.json" className="nav_link">
              Todo
            </a>
          </li>
          <li className="nav_item nav_item-active">
            <a href="/package-lock.json" className="nav_link">
              Remeras
            </a>
            <div className="dropdown">
              <ul className="dropdown_list">
                <li className="dropdown_item">
                  <a href="/" className="dropdown_link">
                    Peliculas
                  </a>
                </li>
                <li className="dropdown_item">
                  <a href="/" className="dropdown_link">
                    Animes
                  </a>
                </li>
                <li className="dropdown_item">
                  <a href="/" className="dropdown_link">
                    Juegos
                  </a>
                </li>
              </ul>
            </div>
          </li>
          {/* <li className="nav_item nav_item-active">
            <a href="/package-lock.json" className="nav_link">
              Buzos
            </a>
          </li>
          <li className="nav_item nav_item-active">
            <a href="/package-lock.json" className="nav_link">
              Otros
            </a>
          </li> */}
        </ul>
        <CartWidget />
      </nav>
    </Container>
  );
};

export default NavBar;
