import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import chuveiro from "./img/Inst-chuv.png";
import bacia from "./img/inst-bacia.png";
import torneira from "./img/inst-b.png"
import './styles/productStyle.css'
import Button from '../Button/Button';

function Product({tituloChuveiro, conteudoChuveiro, tituloBacia, conteudoBacia, tituloTorneira, conteudoTorneira}){
return(
<div className="products-container">
<div className="card mb-3 border-0" id="card-wrap" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={chuveiro} id="img-card" className="img-fluid rounded-start" alt="instalação chuveiros" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{tituloChuveiro}</h5>
        <p className="card-text">{conteudoChuveiro}</p>
        <Button sobre="Mais sobre"/>
      </div>
    </div>
    
  </div>
</div>
<div className="card mb-3 border-0" id="card-wrap">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={bacia} id="img-bacia" className="img-fluid rounded-start" alt="instalação bacia sanitaria" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{tituloBacia}</h5>
        <p className="card-text">{conteudoBacia}</p>
        <Button sobre="Mais sobre"/>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3 border-0" id="card-wrap">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={torneira} id="img-bacia" className="img-fluid rounded-start" alt="instalação bacia sanitaria" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{tituloTorneira}</h5>
        <p className="card-text">{conteudoTorneira}</p>
        <Button sobre="Mais sobre"/>
      </div>
    </div>
  </div>
</div>
</div>
)
}
Product.propTypes ={
    tituloChuveiro: PropTypes.string.isRequired,
    conteudoChuveiro: PropTypes.string.isRequired,
    tituloBacia: PropTypes.string.isRequired,
    conteudoBacia: PropTypes.string.isRequired,
    tituloTorneira: PropTypes.string.isRequired,
    conteudoTorneira: PropTypes.string.isRequired

}



export default Product;