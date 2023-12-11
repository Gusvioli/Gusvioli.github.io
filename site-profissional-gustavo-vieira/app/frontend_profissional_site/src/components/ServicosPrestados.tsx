import { useContext } from 'react';
import Context from '../context/Context';
import '../styles/components-styles/servicosPrestados.css';
import ComponentIntersectionObserver from './utils/ComponentIntersectionObserver';

const ServicosPrestados = () => {
    const {inspectElement, setMenu } = useContext(Context);
    
    if (inspectElement[0].q === "services" && inspectElement[0].inView
    || inspectElement[0].q === "contatos" && inspectElement[0].inView === false) {
        document.getElementById("services-h1")?.classList.add("services-h1");
    } else {
        document.getElementById("services-h1")?.classList.remove("services-h1");
    } 

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickClose = (e: any) => {        
        if (e.target.id === "services") {
            setMenu(false);
        }
    }
    return (
        <div
            className='servicos-prestados-container'
            id="services"
            onClick={(e) => handleClickClose(e)}
        >
            <ComponentIntersectionObserver q="services" />
            <div className='div-interna-servicos' id='div-interna-servicos1'>
                <h1 className='services-h1' id='services-h1'>Serviços</h1>
                <section id="about">
                    <h2>Sobre Mim</h2>
                    <p>Sou uma equipe de programadores apaixonado por transformar ideias em linhas de código. Minha missão é criar sites que não apenas impressionam visualmente, mas também funcionam de maneira eficiente e eficaz.</p>
                </section>

                <section className='meus-servicos' id="meus-servicos">
                    <h2>Meus Serviços</h2>
                    <ul>
                        <li>Design Personalizado</li>
                        <li>Desenvolvimento Responsivo</li>
                        <li>SEO Otimizado</li>
                        <li>Funcionalidades Avançadas</li>
                        <li>Suporte Contínuo</li>
                    </ul>
                </section>
            </div>  
            <div className='div-interna-servicos' id='div-interna-servicos2'>
                <section id="why-choose-us">
                    <h2>Por que me Escolher</h2>
                    <p>Meu código vai além de simples linhas; é uma expressão de sua marca. Combino criatividade e funcionalidade para criar uma presença online única para o seu negócio. Além disso:</p>
                    <ul>
                        <li>Códigos limpos e eficientes</li>
                        <li>Compromisso com prazos</li>
                        <li>Abertos à personalização</li>
                    </ul>
                </section>

                <section id="entre-contact">
                    <h2>Entre em Contato</h2>
                    <p>Estou pronto para transformar sua visão em realidade digital. Entre em contato comigo para uma consulta gratuita.</p>
                    <a
                        href="mailto:gustavovieiradeoliveira@gmail.com"
                        target='_blank'
                    >
                       Através do e-mail
                    </a>
                </section>  
            </div>          
        </div>
    );
};

export default ServicosPrestados;
