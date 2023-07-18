
import "./CardContact.css";

function CardContact() {
  return (
    <div className="card-contact">
      <h2 className="cardContact-title">Onde nos encontrar?</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d871.0231996513273!2d-48.668105130402836!3d-27.633177910382013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273597df5cdc5d%3A0x61d77e9eea32db8c!2sR.%20Nova%20Veneza%2C%20326%20-%20Jardim%20Aquarius%2C%20Palho%C3%A7a%20-%20SC%2C%2088133-050!5e1!3m2!1spt-BR!2sbr!4v1689270404465!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          title="Localização"
        ></iframe>
      </div>
      <div className="contact-info">
        <h3 className="info-title">Localização</h3>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i> Rua Nova Veneza 326
          </li>
          <li>
            <i className="fas fa-phone-alt"></i> (48) 99999-2093
          </li>
          <li>
            <i className="fas fa-envelope"></i> bestandigsc@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardContact;
