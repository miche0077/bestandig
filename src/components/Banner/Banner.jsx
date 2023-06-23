import PropTypes from "prop-types";
import "./styles/bannerStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner({titulo, subtitulo}){
    return(
        <div className="banner-container"> 
        <div className="navbar navbar-expand-lg navbar bg-dark border-bottom border-bottom-dark" id="container-banner"data-bs-theme="dark">
          <h1 className="titulo">{titulo}</h1>
            <h2 className="subtitulo">{subtitulo}
            <a className="point">.</a>
            </h2>
            </div>
          </div>
        
    )
}
Banner.propTypes ={
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired

}
export default Banner;