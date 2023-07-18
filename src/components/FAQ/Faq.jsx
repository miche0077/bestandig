import  { useState } from 'react';
import PropTypes from 'prop-types';
import './faq.css'; // Importe el archivo de estilos

const Faq = ({faqData}) => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  return (
    <>
   
    <section className="faq-section">
     <h2>Perguntas Frecuentes</h2>
     <br/>
      {faqData.map((item, index) => (
        <div key={index} className={`faq-item ${activeItem === index ? 'active' : ''}`}>
          <h2 className="faq-question" onClick={() => toggleItem(index)}>
            {item.question}
          </h2>
          <p className="faq-answer">
            {item.answer}
          </p>
        </div>
      ))}
    </section>
    </>
  );
};

Faq.propTypes = {
    faqData: PropTypes.arrayOf(PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })).isRequired,
  };

export default Faq;
