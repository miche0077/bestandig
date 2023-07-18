import "./App.css";

import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Product from "./components/Products/Product";
import Banner from "./components/Banner/Banner";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <>
      <Header />
      
      <Banner />

      <Routes>
        <Route path="/" element={<main/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products"
          element={
            <Product
              tituloChuveiro="Instalação de Chuveiros"
              conteudoChuveiro="A instalação de chuveiros é um serviço especializado que consiste em montar e conectar
         corretamente um chuveiro em um banheiro ou área de banho. Essa tarefa requer conhecimentos de hidráulica, 
         elétrica e habilidades técnicas para garantir que o chuveiro funcione corretamente e com segurança."
              tituloBacia="Instalação de Bacia Sanitaria"
              conteudoBacia="
         A instalação de uma bacia sanitária é um procedimento fundamental na construção ou reforma de banheiros. Essa etapa envolve a
          correta colocação e conexão da bacia para garantir seu funcionamento adequado e eficiente."
              tituloTorneira="Instalação Torneiras"
              conteudoTorneira="A instalação de uma torneira por um encanador qualificado é importante para garantir 
          uma conexão correta e segura, evitando vazamentos e problemas futuros. É recomendável contar com um profissional 
          para realizar esse tipo de serviço, garantindo um trabalho de qualidade e duradouro."
            />
          }
        />
        <Route path="*" element={<NotFound /> }/>
      </Routes>
          <Layout />
      <Footer
        contato="Contato"
        telefone="+55 48 9999-2093"
        email="bestandigsc@gmail.com"
        endereco="Rua Nova Veneza 326"
        cidade="Palhoça SC"
        tituloinformacao="Informações"
        infcontent="CNPJ 0000000-000000"
      />
      
    </>
  );
}

export default App;
