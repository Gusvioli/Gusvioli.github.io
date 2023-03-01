import React, { useContext, useEffect } from 'react';
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
      // backgroundColor: `rgb(${[80, 80, 120]})`,
    };
    return randDiv;
  }

  const headerDiv = () => {
    const { projetos } = info;
    if (projetos.length > 0) {
      const randDiv = {
        width: 380,
        height: 380,
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
          <a href='/' target='_black'>
            <div className='menu-header-div' style={handleRandDiv()}>
                <img
                  src={require(`../imgs/Logo_G-V-Oliveira-64x64-green.png`)}
                  alt={info.img}
                  style={{ width: 44, height: 44 }}
                />
            </div>
          </a>
          <a href='https://github.com/Gusvioli' target='_black'>
            <div className='menu-header-div' style={handleRandDiv()}>
              <div className='menu-header-div-interno' data-testid='Github'>Github</div>
            </div>
          </a>
          <a href='https://www.linkedin.com/in/gustavovieiradeoliveira/' target='_black'>
            <div className='menu-header-div' style={handleRandDiv()}>
              <div className='menu-header-div-interno' data-testid='Linkedin'>Linkedin</div>
            </div>
          </a>
          <a href='#sobremim'>
            <div className='menu-header-div' style={handleRandDiv()}>
              <div className='menu-header-div-interno' data-testid='SobreMim'>Sobre mim</div>
            </div>
          </a>
          <a href='#habilidades'>
            <div className='menu-header-div' style={handleRandDiv()}>
              <div className='menu-header-div-interno' data-testid='Habilidades'>Habilidades</div>
            </div>
          </a>
          <a href='#projetos'>
            <div className='menu-header-div' style={handleRandDiv()}>
              <div className='menu-header-div-interno' data-testid='Projetos'>Projetos</div>
            </div>
          </a>
          <a href='#topo'>
            <div className='menu-header-div' style={handleRandDiv()}>
              <div className='menu-header-div-interno' data-testid='IrTopo'>Ir topo</div>
            </div>
          </a>
        </section>
      </header>
      <main id='topo'>
        <section className="App-main">
          <div className="App-central" id='fotoGustavo' data-testid='fotoGustavo'></div>
          <div className='ClassMsgGus' data-testid='msgGus'>{info.msgGus}</div>
          <h1 className='margem-top' id='projetos'>Projetos</h1>
          <section className="App-section">
            {info.projetosSrc.map((ma, index) => (
              <a href={ma.link} alt={ma.nome} target='_black' key={index}>
                <div className='App-project' style={headerDiv()}>
                  <div className='App-projects-conteudo'>
                    <img className='divImg' src={require(`../imgs/${ma.img}`)} alt={ma.img} />
                    <div className='App-projects-conteudo-nome'>
                      {ma.nome}
                    </div>
                    <div className='App-projects-conteudo-descricao'>
                      {ma.desc}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </section>
          <h1 id="habilidades">Habilidades</h1>
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
          <h1 id='sobremim' className='margem-top'>Sobre Mim</h1>
          <section className='App-main-sobre-mim'>
            <div>{info.sobreMin}</div>
          </section>
        </section>
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
