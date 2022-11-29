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
        'https://camo.githubusercontent.com/8ba0fdaf8e9ed09666decdff3cd38f0aa840bb98b594872cbd14b90caef7069c/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f65736c696e742f65736c696e742d69636f6e2e737667',
        'https://camo.githubusercontent.com/7b7f04b16cc2d2d4a32985710e4d640985337a32bbb1e60cdacede2c8a4ae57b/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f72656475782e737667',
        'https://camo.githubusercontent.com/ce0a32825268b09cd5e0fc7c2a09c587a708491427cb794cade8f1866f7284c6/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6a6573746a73696f2f6a6573746a73696f2d69636f6e2e737667',
        'https://camo.githubusercontent.com/288cace72126df58aaeaa75627898785885858d54b03cb15ea3353a515642204/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6e6f64656a732f6e6f64656a732d69636f6e2e737667',
        'https://camo.githubusercontent.com/6c8e86dfc77346d4388b8e064db73017a210f18e2cd18e74779ea34f2d630f4a/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769746875622f6769746875622d6f726967696e616c2e737667',
        'https://camo.githubusercontent.com/ddd323c6c51fbc9a81fcbb60fe25a588ab59fdd6567b7e827f4d2d5c4e09f6a1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d706c61696e2e737667',
        'https://camo.githubusercontent.com/aa85cea585880ae694b4fe8dde116d092b8907d6351c71fcd76f00f7586fad72/68747470733a2f2f74657374696e672d6c6962726172792e636f6d2f696d672f6f63746f7075732d313238783132382e706e67',
        'https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667',
        'https://camo.githubusercontent.com/2e496d4bfc6f753ddca87b521ce95c88219f77800212ffa6d4401ad368c82170/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d6f726967696e616c2e737667',
        'https://camo.githubusercontent.com/da7acacadecf91d6dc02efcd2be086bb6d78ddff19a1b7a0ab2755a6fda8b1e9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667',
        'https://www.vectorlogo.zone/logos/docker/docker-official.svg',
        'https://www.vectorlogo.zone/logos/mysql/mysql-official.svg',
      ],
      usoSite: [3, 7, 8, 9, 2],
      msgGus: 'Oi eu sou o Gustavo, seja bem vindo(a) ao meu Portfólio!', 
      classMsgGus: 'MsgGusNone',
      sobreMin: 'Meu nome é Gustavo Vieira e nasci no Rio de Janeiro. Vivo no bairro da Ilha do Governador e, quando tinha 16 anos, descobri um forte interesse por computadores e programação. Tenho curiosidade em saber como funcionam as coisas e, por isso, comecei a aprender HTML. Estudei por um ano e, depois, me interessei por CSS e PHP. Desde então, vivo aprendendo novas linguagens de programação e tudo o que puder sobre computadores. Luto para alcançar meus objetivos e, atualmente, tenho conhecimento em Python, PHP, HTML5, CSS, JAVASCRIPT, REACT, JEST, RTL, GITHUB, NODE JS, REDUX, DOCKER, SQL e Metodologias Ágeis. Meu objetivo é me tornar um desenvolvedor FullStack e ter um bom emprego na área de TI.', 
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
        // {
        //   img: 'bgprojeto0.png',
        //   nome: 'Shopping cart',
        //   desc: 'Projeto de uma página de carrinho de compras totalmente dinâmico!',
        //   link: 'https://gusvioli.github.io/shopping-cart',
        // },
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