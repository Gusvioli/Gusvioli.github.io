import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import Emailjs from '../components/Emailjs'
import bgprojeto0 from '../imgs/bgprojeto0.png'; 
import bgprojeto1 from '../imgs/bgprojeto1.png'; 

function Home() {
    const { info, setArray, rgb, setRgb } = useContext(Context);

    const handleRandDiv = () => {
      const randDiv = {
        width: 100,
        height: 10,
        padding: 10,
        backgroundColor: `rgb(${[80,80,120]})`,
      };
      return randDiv;
    }
    
    const handleProjetos = (urlSrc) => {
      const randProjetos = {
        width: '100%',
        height: '100%',
        borderRadius: '15px',
        backgroundPosition: 0,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${urlSrc})`,
      };
      return randProjetos;
    }

    const handleIr = (event) => {
      if (event.target.id === 'sobreMim') {
        window.scroll(0, 950);
      }
      if (event.target.id === 'habilidades') {
        window.scroll(0, 10);
      }
      if (event.target.id === 'contatos') {
        window.scroll(0, 2000);
      }
    }

    const headerDiv = () => {
      const { projetos } = info;
      if (projetos.length > 0) {
        const randDiv = {
          width: 440,
          height: 390,
          backgroundColor: `rgb(${[80,80,120]})`,
        };
        return randDiv;
      } else {
        const randDiv = {
          width: Math.floor(Math.random()  * 150) + 50,
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
    } , [info, setArray, rgb, setRgb]);

    return (
        <div className="App">
            <header className="App-header">
              <section className='menu-header'>
                <a href='https://github.com/Gusvioli' target='_black'>
                  <div className='menu-header-div' style={ handleRandDiv() }>
                    <div className='menu-header-div-interno'>Github</div>
                  </div>
                </a>
                <a href='https://www.linkedin.com/in/gustavovieiradeoliveira/' target='_black'>
                  <div className='menu-header-div' style={ handleRandDiv() }>
                    <div className='menu-header-div-interno'>Linkdin</div>
                  </div>
                </a>
                <a href='#sobremim' onClick={ handleIr }>
                  <div className='menu-header-div' style={ handleRandDiv() }>
                    <div className='menu-header-div-interno' id="sobreMim">Sobre mim</div>
                  </div>
                </a>
                <a href='#habilidades' onClick={ handleIr }>
                  <div className='menu-header-div' style={ handleRandDiv() }>
                    <div className='menu-header-div-interno' id="habilidades">Habilidades</div>
                  </div>
                </a>
                <a href='#contato' onClick={ handleIr }>
                  <div className='menu-header-div' style={ handleRandDiv() }>
                    <div className='menu-header-div-interno' id="contatos">Contato</div>
                  </div>
                </a>
              </section>
              <div className="App-central"></div> 
            </header>
            <main>
              <section className="App-main">
                <h1 className='margem-top'>Habilidades</h1>
                <section className='menu-header-tecs'>
                  <div>
                    { info.srcTec.map((ma, index) => 
                    <span key={index} >
                      <a target="_blank" rel="noopener noreferrer nofollow" href={ma}>
                        <img height="70px"
                          src={ma}
                          data-canonical-src="https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg"
                          alt='' />
                      </a>
                    </span>
                    ) }
                  </div>
                </section>
                <h1 className='margem-top'>Projetos</h1>
                <section className="App-section">
                  { info.projetosSrc.map((ma, index) => <div className='App-project' style={ headerDiv() } key={index}>
                    <div className='App-projects-conteudo'>
                        <div style={ index === 0 ?
                          handleProjetos(bgprojeto0) : handleProjetos(bgprojeto1)
                          }></div>
                        <div className='App-projects-conteudo-nome'>
                            {ma.nome}
                        </div>
                        <div className='App-projects-conteudo-descricao'>
                          {ma.desc}
                        </div>
                        <a className='App-projects-conteudo-link' href={ma.link} alt={ma.nome}  target='_black'>
                          <div>
                            Ver projeto {ma.nome}
                          </div>
                        </a>
                      </div>
                    </div>) }
                </section>
                <h1 className='margem-top'>Sobre Mim</h1>
                <section className='App-main-sobre-min'>
                  <div>{info.sobreMin}</div>
                </section>
              </section>
              <Emailjs/>
            </main>
            <footer className="App-footer">
                <div>
                  <span className="footer__align">
                    {info.description}
                    {
                      info.usoSite.map((element, index) => 
                        <a key={index} target="_blank" rel="noopener noreferrer nofollow" href={info.srcTec[element]}>
                          <img height="30px"
                            src={info.srcTec[element]}
                            data-canonical-src="https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg"
                            alt='' />
                        </a>
                      )
                    }
                    
                  </span>
                </div>
            </footer>
        </div>
    );
  
}

export default Home;
