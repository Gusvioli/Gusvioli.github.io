import { useContext } from 'react';
import Context from '../context/Context';
import '../styles/components-styles/meuprojetos.css';
import ComponentIntersectionObserver from './utils/ComponentIntersectionObserver';
import LiCross from './utils/LiCross';
import { btnLFunc, btnRFunc } from './utils/variaveis';
import seta from '../assets/proximo.png';
import PopUpInfoMeusProjetos from './utils/popups/PopUpInfoMeusProjetos';

const MeusProjetos = () => {
    const {
        inspectElement,
        setMenu,
        cross,
        setCross,
        tam,
        exibirPopUpInfoMeusProjetos} = useContext(Context);

    if (inspectElement[0].q === "meusprojetos" && inspectElement[0].inView || inspectElement[0].q === "redes-sociais"&& inspectElement[0].inView === false) {
        document.getElementById("meusprojetos-h1")?.classList.add("meusprojetos-h1");
    } else {
        document.getElementById("meusprojetos-h1")?.classList.remove("meusprojetos-h1");
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickClose = (e: any) => {             
        if (
            e.target.id === "meusprojetos") {
            setMenu(false);
        }
    }

    return (
        <div
            className="meusprojetos"
            id="meusprojetos"
            onClick={(e) => handleClickClose(e)}
        >
        <ComponentIntersectionObserver q="meusprojetos" />
            <h1
                className='meusprojetos-h1'
                id='meusprojetos-h1'
            >
                Meus Projetos
            </h1>

            {exibirPopUpInfoMeusProjetos
            ? 
            <PopUpInfoMeusProjetos /> : 
            <ul
                className='meusprojetos-ul-inter'
                id="habilidades-ul-inter"
                onClick={(e) => handleClickClose(e)}
            >

                <li
                    className='li-button-l'
                    onClick={() => setCross(btnLFunc(cross, tam))}
                >
                    <img className="li-button-l-seta" src={seta} /></li>

                    {<LiCross n={1} cross={cross} tam={tam} />}
                    {<LiCross n={2} cross={cross} tam={tam} />}
                    {<LiCross n={3} cross={cross} tam={tam} />}

                <li
                    className='li-button-l'
                    onClick={() => setCross(btnRFunc(cross, tam))}
                >
                    <img className="li-button-r-seta"  src={seta} /></li>
            </ul> }
        </div>
    );
};

export default MeusProjetos;