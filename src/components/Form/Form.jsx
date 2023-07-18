import { useState } from "react";
import "./FormStyle.css"; // Importe o arquivo CSS para estilizar o formulário

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode realizar ações com os dados do formulário, como enviá-los para um servidor
    console.log(name, email, telefone, mensagem);
  };

  return (
   
    <form onSubmit={handleSubmit} className="form-container">

      <div className="form-group">
         <h3 className="titulo-contact">Deixe o seu recado</h3>
        <label htmlFor="name" >Nome</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" >Email</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="telefone" >Telefone</label>
        <input
          type="number"
          id="telefone"
          value={telefone}
          placeholder="Telefone"
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mensagem" >Mensagem</label>
        <textarea
          id="mensagem"
          value={mensagem}
          placeholder="Escreva a sua mensagem"
          maxLength={500}
          onChange={(e) => setMensagem(e.target.value)}
        ></textarea>
        <p className="maxLength"> { mensagem.length} de 500 carateres</p>
      </div>
      <button type="submit" className="submit-button">Enviar</button>
    </form>
  );
}

export default Form;
