import React, { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [info, setInfo] = useState({
      title: 'Bem vindo ao meu Portfólio',
      description: '2022 - Portfólio de Gustavo Vieira',
      tecsUsadas: 'Tecnologias usadas nesse site:',
      nome: 'Gustavo Vieira',
      projetos: ['1'],
      srcTec: [
        'https://www.vectorlogo.zone/logos/eslint/eslint-ar21.svg',
        'https://camo.githubusercontent.com/7b7f04b16cc2d2d4a32985710e4d640985337a32bbb1e60cdacede2c8a4ae57b/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f72656475782e737667',
        'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-ar21.svg',
        'https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg',
        'https://www.vectorlogo.zone/logos/github/github-ar21.svg',
        'https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg',
        'https://camo.githubusercontent.com/aa85cea585880ae694b4fe8dde116d092b8907d6351c71fcd76f00f7586fad72/68747470733a2f2f74657374696e672d6c6962726172792e636f6d2f696d672f6f63746f7075732d313238783132382e706e67',
        'https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg',
        'https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg',
        'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg',
        'https://www.vectorlogo.zone/logos/docker/docker-official.svg',
        'https://www.vectorlogo.zone/logos/mysql/mysql-official.svg',
        'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
        'https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-ar21.svg',
        'https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg',
        'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg',
        'https://www.vectorlogo.zone/logos/python/python-ar21.svg',
      ],
      usoSite: [3, 7, 8, 9, 2],
      msgGus: 'Oi eu sou o Gustavo, seja bem vindo(a) ao meu Portfólio!', 
      classMsgGus: 'MsgGusNone',
      sobreMin: `Tenho uma grande curiosidade em entender como as coisas funcionam e, por isso, decidi me aprofundar no campo da programação para a Web. Atualmente, tenho habilidades em várias tecnologias, como Html5, Css, JavaScript, ReactJs, GitHub, NodeJs, Redux, Docker, SQL, TypeScript, Python, Deploy e metodologias ágeis.
      Além disso, estou sempre me atualizando e me desenvolvendo como programador, buscando novos conhecimentos e desafios através de fórum, artigos, videos pela internet e Hackerrank. Meu objetivo é me tornar um desenvolvedor Full-Stack altamente qualificado, conquistar reconhecimento no mercado de trabalho e obter um emprego de qualidade na área de desenvolvimento web.`, 
      projetosSrc: [
        {
          img: 'bgprojeto0.png',
          nome: 'Tryunfo',
          desc: 'Projeto de um jogo no estilo Super Trunfo!',
          link: 'https://gusvioli.github.io/tryunfo',
        },
        {
          img: 'bgprojeto1.png',
          nome: 'Solar-system',
          desc: 'Projeto para visualizar todos os planetas do sistema e suas missões espaciais',
          link: 'https://gusvioli.github.io/solar-system',
        },
        {
          img: 'bgprojeto2.png',
          nome: 'Pixel-Art',
          desc: 'Projeto de uma página web que contém uma paleta de cores funcional que poderá ser utilizada para criar desenhos em pixels.',
          link: 'https://gusvioli.github.io/pixel-art',
        },
        {
          img: 'bgprojeto3.png',
          nome: 'Shopping cart',
          desc: 'Projeto de uma página de carrinho de compras totalmente dinâmico!',
          link: 'https://gusvioli.github.io/shopping-cart',
        },
        {
          img: 'bgprojeto4.png',
          nome: 'Site de Estatistifica - SetW',
          desc: 'Projeto de uma página de que exibe uma pequena estatisticas sobre o texto digitado!',
          link: 'https://gusvioli.github.io/setw',
        },
      ],
    });

    const [forms, setForms] = useState({
      formContactName: '',
      formContactEmail: '',
      formContactMsg: '',
      send: 0,
    });
    
  const [array, setArray] = useState([]);
  const [rgb, setRgb] = useState([205,205,205]);

  return (
    <Context.Provider value={ { info,
    array,
    setArray,
    setInfo,
    rgb,
    setRgb,
    forms,
    setForms } }>
      {children}
    </Context.Provider>
  );
}

export default Provider;