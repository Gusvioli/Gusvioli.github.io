import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function Home() {
    const { info, array, setArray, rgb, setRgb } = useContext(Context);

    const handleRandDiv = () => {
      const randDiv = {
        width: 100,
        height: 10,
        padding: 10,
        backgroundColor: `rgb(${[80,80,120]})`,
      };
      return randDiv;
    }
    const headerDiv = () => {
      const { projetos } = info;
      if (projetos.length > 0) {
        const randDiv = {
          width: 400,
          height: 250,
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
        for (let i = 0; i < 4; i++) array.push(i);
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
                <a href='#sobremim'>
                  <div className='menu-header-div' style={ handleRandDiv() }>
                    <div className='menu-header-div-interno'>Sobre mim</div>
                  </div>
                </a>
                <a href='#habilidades'>
                  <div className='menu-header-div' style={ handleRandDiv() }>
                    <div className='menu-header-div-interno'>Habilidades</div>
                  </div>
                </a>
                <div className='menu-header-div' style={ handleRandDiv() }>
                  <div className='menu-header-div-interno'>Contato</div>
                </div>
              </section>
              <div className="App-central"></div> 
            </header>
            <main>
              <section className="App-main">
                <h1 id='habilidades'>Habilidades</h1>
                <section className='menu-header-tecs'>
                  <div>
                    { info.srcTec.map((ma, index) => 
                    <span>
                      <a key={index} target="_blank" rel="noopener noreferrer nofollow" href={ma}>
                        <img height="70px"
                          src={ma}
                          data-canonical-src="https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg"
                          alt='' />
                      </a>
                    </span>
                    ) }
                  </div>
                </section>
                <h1>Projetos</h1>
                <section className="App-section">
                  { array.map((ma, index) => <div className='App-project' style={ headerDiv() } key={index}>
                    <span className='App-project-opacity'></span>
                    </div>) }
                </section>
                <section className='App-main-sobre-min'>
                  <div id='sobremim'>Sobre Mim:</div>
                  <div>{info.sobreMin}</div>
                </section>
              </section>
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
