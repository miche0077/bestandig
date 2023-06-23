import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/buttonStyle.css"
function Button({sobre}){
    return(
        <div id="btn-sobre">
        <button type="button" className="btn btn-outline-dark btn-lg" >{sobre}</button>
        </div>
    )
}

Button.propTypes={
    sobre: PropTypes.string.isRequired
}

export default Button;