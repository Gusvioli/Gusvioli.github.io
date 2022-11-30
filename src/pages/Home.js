import React, { useContext, useEffect } from 'react';
import {
  FaLink,
  FaGithub,
  FaLinkedin,
  FaAddressCard,
  FaUserGraduate,
  FaPaperPlane,
  FaMedal,
  FaFolderOpen,
  FaHandPointUp
} from "react-icons/fa";
import Context from '../context/Context';
import Emailjs from '../components/Emailjs';

function Home() {
  // contar();
  const { info, setArray, rgb, setRgb } = useContext(Context);

  const handleRandDiv = () => {
    const randDiv = {
      width: 'auto',
      height: 10,
      padding: 10,
      backgroundColor: `rgb(${[80, 80, 120]})`,
    };
    return randDiv;
  }

  const headerDiv = () => {
    const { projetos } = info;
    if (projetos.length > 0) {
      const randDiv = {
        width: 370,
        height: 450,
        backgroundColor: `rgb(${[80, 80, 120]})`,
      };
      return randDiv;
    } else {
      const randDiv = {
        width: Math.floor(Math.random() * 150) + 50,
        height: Math.floor(Math.random() * 80) + 20,
        backgroundColor: `rgb(${rgb})`,
      };
      return randDiv;
    }
  };

  useEffect(() => {
    const array = [];
    document.title = `${info.nome}: ${info.title}`;
    for (let i = 0; i < 2; i++) array.push(i);
    setArray(array);
  }, [info, setArray, rgb, setRgb]);

  return (
    <div className="App">
      <header className="App-header">
        <section className='menu-header'>
          <a href='https://github.com/Gusvioli' target='_black'>
            <div className='menu-header-div' style={handleRandDiv()}>
              <FaGithub />
              <div className='menu-header-div-interno' data-testid='Github'> Github</div>
            </div>
          </a>
          <a href='https://www.linkedin.com/in/gustavovieiradeoliveira/' target='_black'>
            <div className='menu-header-div' style={handleRandDiv()}>
              <FaLinkedin />
              <div className='menu-header-div-interno' data-testid='Linkedin'> Linkedin</div>
            </div>
          </a>
          <a href='#sobremim'>
            <div className='menu-header-div' style={handleRandDiv()}>
              <FaAddressCard />
              <div className='menu-header-div-interno' data-testid='SobreMim'> Sobre mim</div>
            </div>
          </a>
          <a href='#habilidades'>
            <div className='menu-header-div' style={handleRandDiv()}>
              <FaUserGraduate />
              <div className='menu-header-div-interno' data-testid='Habilidades'> Habilidades</div>
            </div>
          </a>
          <a href='#contato'>
            <div className='menu-header-div' style={handleRandDiv()}>
              <FaPaperPlane />
              <div className='menu-header-div-interno' data-testid='Contato'> Contato</div>
            </div>
          </a>
          <a href='#projetos'>
            <div className='menu-header-div' style={handleRandDiv()}>
              <FaFolderOpen />
              <div className='menu-header-div-interno' data-testid='Contato'> Projetos</div>
            </div>
          </a>
          <a href='#topo'>
            <div className='menu-header-div' style={handleRandDiv()}>
              <FaHandPointUp />
              <div className='menu-header-div-interno' data-testid='Contato'> Ir topo</div>
            </div>
          </a>
        </section>
      </header>
      <main id='topo'>
        <section className="App-main">
          <div className="App-central" id='fotoGustavo'></div>
          <div className='ClassMsgGus'>{info.msgGus}</div>
          <h1 className='margem-top' id='projetos'><FaMedal /> Projetos</h1>
          <section className="App-section">
            {info.projetosSrc.map((ma) => (
              <div className='App-project' style={headerDiv()}>
                <div className='App-projects-conteudo'>
                  <img className='divImg' src={require(`../imgs/${ma.img}`)} alt={ma.img} />
                  <div className='App-projects-conteudo-nome'>
                    <div className='msg_info_campos'>Nome do projeto:</div>
                    {ma.nome}
                  </div>
                  <div className='App-projects-conteudo-descricao'>
                    <div className='msg_info_campos'>Descrição do projeto:</div>
                    {ma.desc}
                  </div>
                  <a
                    className='App-projects-conteudo-link'
                    href={ma.link}
                    alt={ma.nome}
                    target='_black'
                  > Ver projeto {ma.nome} <FaLink />
                  </a>
                </div>
              </div>
            ))}
          </section>
          <h1 id="habilidades"><FaUserGraduate /> Habilidades</h1>
          <section className='menu-header-tecs'>
            {info.srcTec.map((ma, index) =>
              <span key={index} >
                <img height="70px"
                  src={ma}
                  data-canonical-src="https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg"
                  alt='' />
              </span>
            )}
          </section>
          <h1 id='sobremim' className='margem-top'><FaAddressCard /> Sobre Mim</h1>
          <section className='App-main-sobre-mim'>
            <div>{info.sobreMin}</div>
          </section>
        </section>
        <Emailjs />
      </main>
      <footer>
        <div className="App-footer">
          <div className='App-footer-info-desc'>{info.description}</div>
          <div className='App-footer-info-tecsUs'>{info.tecsUsadas}</div>
          <div className='App-footer-info-usoSite'>
            {
              info.usoSite.map((element, index) =>
                <img key={index} height="25px"
                  src={info.srcTec[element]}
                  data-canonical-src="https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg"
                  alt='' />
              )
            }
          </div>
        </div>
      </footer>
    </div>
  );

}

export default Home;
