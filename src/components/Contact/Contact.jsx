import CardContact from "../CardContact/CardContact";
import Faq from "../FAQ/Faq";
import Form from "../Form/Form";
import './Contact.css'

const faqData = [
  {
    question: 'Quais serviços oferecem?',
    answer: 'Oferecemos serviços especializados na area Hidraúlica e Elétrica',
  },
  {
    question: 'Como eu posso entrar em contato com o suporte?',
    answer: 'Para entrar em contato com nosso suporte, você pode enviar um e-mail para bestandigsc@gmail.com ou preencher o formulário de contato em nossa página de suporte.',
  },
  {
    question: 'Quais são os métodos de pagamento aceitos?',
    answer: 'Aceitamos pagamentos por cartão de crédito/debito, pix, e dinheiro.',
  },
  
];

function Contact() {
  return (
    <>
      <div className="contact-body">
      
      <Form />
      <CardContact />
      <Faq faqData={faqData}/>
    </div>
    </>
  );
}

export default Contact;
