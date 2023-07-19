import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Header.css';
import logo from '../Header/img/logo.png';
import { Link, Outlet } from 'react-router-dom';

function Header() {
    return (
      <>
      <div className="header-container">
        <header className="navbar navbar-expand-lg navbar bg-dark" data-bs-theme="dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img id="img-logo" src={logo}/>
              </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/sobre" className="nav-link"> Sobre</Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link" >Serviços</Link>
                </li>
                <li className="nav-item">
                <Link to="/contact"  className='nav-link'>Contato</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <Outlet />
        </div>
        </>
  );
}

export default Header;
