import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {


  return (
    <Container component="header" className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <span className="nav_logo">QBR</span>
          </Link>
        </div>
        <ul className="nav_list">
          <li className="nav_item nav_item-active">
            <Link to="/" className="nav_link">
              Inicio
            </Link>
          </li>
          <li className="nav_item nav_item-active">
            <Link to="/products" className="nav_link">
              Remeras
            </Link>
            <div className="dropdown">
              <ul className="dropdown_list">
                <li className="dropdown_item">
                  <Link to="/products/category/movies" className="dropdown_link">
                    Peliculas
                  </Link>
                </li>
                <li className="dropdown_item">
                  <Link to="/products/category/anime" className="dropdown_link">
                    Animes
                  </Link>
                </li>
                <li className="dropdown_item">
                  <Link to="/products/category/games" className="dropdown_link">
                    Juegos
                  </Link>
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
