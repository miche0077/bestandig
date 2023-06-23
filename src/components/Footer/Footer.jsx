
import PropTypes from 'prop-types';
import logo from "./img/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./styles/footerStyles.css";

function Footer ({contato, telefone, email, endereco, cidade}){
return(
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
      <div>
      <FontAwesomeIcon icon="fa-brands fa-instagram"/>
      </div>
    </div>
    <div className="col">
      One of three columns
    </div>
  
</div>
    
)
}
Footer.propTypes={
contato: PropTypes.string.isRequired,
telefone: PropTypes.number.isRequired,
email: PropTypes.string.isRequired,
endereco: PropTypes.string.isRequired,
cidade:PropTypes.string.isRequired
}

export default Footer;