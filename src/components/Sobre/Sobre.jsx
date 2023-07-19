import PropTypes from 'prop-types';
import './Sobre.css'
function Sobre({titulo, info}){
return(
   <>
   <div className="sobre-container">
      <div className="sobre-content">
      <h1 className="title">{titulo}</h1>
      <p className="sobre">{info}</p>
      </div>
   </div>
   </>
)
}

Sobre.propTypes ={
titulo: PropTypes.string.isRequired,
info: PropTypes.string.isRequired
}
export default Sobre;