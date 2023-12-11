import './styles/App.css';
import FotoDescricao from './components/FotoDescricao';
import Habilidades from './components/Habilidades';
import RedesSociais from './components/RedesSociais';
import ServicosPrestados from './components/ServicosPrestados';
// import Contatos from './components/Contatos';
import foto from './assets/foto-gustavo-vieira.jpeg';
import Menu from './components/Menu';
import Whatsapp from './components/WhatsApp';
import MeusProjetos from './components/MeusProjetos';

function App() {
  return (
    <>
      <Menu />    
      <FotoDescricao
        foto={{ src: foto, alt: "Foto de Gustavo Vieira" }}
        nome={`Gustavo Vieira`.toUpperCase()}
        descricao="Desenvolvedor Full Stack e Python Developer"
      />
      <Habilidades />
      <MeusProjetos />
      <RedesSociais />
      <ServicosPrestados />
      {/* <Contatos /> */}
      <Whatsapp />
    </>
  )
}

export default App
