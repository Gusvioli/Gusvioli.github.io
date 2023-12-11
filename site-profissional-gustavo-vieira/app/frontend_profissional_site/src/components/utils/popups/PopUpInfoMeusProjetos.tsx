import { useContext } from 'react';
import Context from '../../../context/Context';
import '../../../styles/components-styles/pop-Up-Info-Meus-Projetos.css';

const PopUpInfoMeusProjetos = () => {
    const {
        setExibirPopUpInfoMeusProjetos,
        objExibirPopUp
    } = useContext(Context);

    const handleClosePopUpInfo = () => {
        setExibirPopUpInfoMeusProjetos(false);
    };

    return (
        <section
            className='pop-Up-Info-Meus-Projetos'
            id="pop-Up-Info-Meus-Projetos"
        >

            <div
                className="pop-Up-Info-Meus-Projetos-close"
                id="pop-Up-Info-Meus-Projetos-close"
                onClick={() => handleClosePopUpInfo()}
            >
                <a className="pop-Up-Info-Meus-Projetos-close-traco">
                    <span className='traco1-x'></span>
                    <span className='traco2-x'></span>
                </a>
            </div>

            <div className='pop-up-rest'>
                <img className='pop-up-img' src={objExibirPopUp.img} width={400} />
                <div className='pop-up-nome-tcsdescali'>
                    <div>
                        <div className="pop-Up-nome">{objExibirPopUp.nome}</div>
                        <div className="div-li-tecs">
                            {objExibirPopUp.tecs.map((tecnologia: string, index: number) => {
                            return (
                                <span
                                    key={index}
                                    className="span-tecnologia"
                                >
                                    {tecnologia}
                                </span>
                            );
                        })}
                        </div>
                    </div>

                    <div className="div-li-descricao">{objExibirPopUp.desc}</div>

                    <div>
                        <a className="a-li" target="_black" href={objExibirPopUp.link}>
                            Abrir projeto
                        </a>
                    </div>

                </div>

            </div>

        </section>

    );
};

export default PopUpInfoMeusProjetos;