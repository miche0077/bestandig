import PropTypes from "prop-types";
import logo from "./img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./styles/footerStyles.css";

function Footer({ contato, telefone, email, endereco, cidade, tituloinformacao, infcontent }) {
  return (
    <div className="bg-dark border-bottom border-bottom-dark" id="footer">
      <div className="contain-footer">
        <img id="logo" src={logo} alt="logo da empressa" />
      </div>
      <div className="co">
        <h2 className="contato">{contato}</h2>
        <p className="telefone">{telefone}</p>
        <p className="email">{email}</p>

        <div className="co-2">
          <p className="endereco">{endereco}</p>
          <p className="cidade">{cidade}</p>
        </div>
        <div className="icons">
          <a href="https://www.instagram.com/bestandigsc/" className="links">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="mailto:bestandigsc@gmail.com" className="links">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://wa.me/48999992093" className="links">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
      <div className="col">
          <h2>{tituloinformacao}</h2>
          <p>Produtos</p>
          <p>Contato</p>
          <p>Condições</p>
          <p className="CPNJ">{infcontent}</p>
          </div>
    </div>
  );
}
Footer.propTypes = {
  contato: PropTypes.string.isRequired,
  telefone: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  endereco: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
  tituloinformacao: PropTypes.string.isRequired,
  infcontent: PropTypes.string.isRequired
};

export default Footer;
