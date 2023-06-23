import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Header.css';
import logo from '../Header/img/logo.png';

function Header() {
    return (
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
                  <a className="nav-link" href="#">Sobre</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Serviços</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contato</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        </div>
  );
}

export default Header;
