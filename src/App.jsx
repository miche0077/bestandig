import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Product from "./components/Products/Product";
import Banner from "./components/Banner/Banner";
import NotFound from "./components/NotFound/NotFound";
import Sobre from "./components/Sobre/Sobre";

function App() {
  return (
    <>
      <Header />
      <Banner />

      <Routes>
        <Route
          path="/sobre"
          element={
            <Sobre
              titulo="Sobre a Beständig"
              info="Somos uma empresa especializada  e temos como compromisso oferecer soluções de qualidade.
Nossos serviços abrangem instalações, reparos e manutenção hidráulica e elétrica para residências e empresas. Contamos com uma equipe experiente e qualificada, pronta para atender às necessidades específicas de cada cliente.
Além disso, garantimos a emissão de nota fiscal para todos os serviços prestados, proporcionando transparência e segurança aos nossos clientes.
Estamos à disposição para agendar uma visita técnica e fornecer um orçamento personalizado de acordo com as demandas dos nossos clientes. Acreditamos que podemos oferecer soluções eficientes e duradouras para seus projetos.
Agradecemos a oportunidade e esperamos poder contribuir com os serviços de hidráulica e elétrica necessários. Entre em contato conosco para mais informações ou para agendar uma visita. Estamos ansiosos para atendê-lo! "
            />
          }
        />
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
        <Route path="*" element={<NotFound />} />
      </Routes>

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
