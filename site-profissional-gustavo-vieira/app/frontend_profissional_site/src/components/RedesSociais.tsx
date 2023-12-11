import { useContext } from 'react';
import Context from '../context/Context';
import '../styles/components-styles/redesSociais.css';
import ComponentIntersectionObserver from './utils/ComponentIntersectionObserver';

const RedesSociais = () => {
    const {inspectElement, setMenu, redes} = useContext(Context);
    
    if (inspectElement[0].q === "redes-sociais" && inspectElement[0].inView
    || inspectElement[0].q === "meusprojetos" && inspectElement[0].inView === false) {
        document.getElementById("redes-h1")?.classList.add("redes-h1");
    } else {
        document.getElementById("redes-h1")?.classList.remove("redes-h1");
    } 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickClose = (e: any) => {        
        if (e.target.id === "redes-sociais"
        || e.target.id === "redes"
        || e.target.id === "redes-h1"
        || e.target.id === "redes-social") {
            setMenu(false);
        }
    }
    
    return (
        <div
            className="redes-sociais"
            id="redes"
            onClick={(e) => handleClickClose(e)}
        >
        <ComponentIntersectionObserver q="redes-sociais" />
            <h1 className='redes-h1' id='redes-h1'>Redes Sociais</h1>
            <div className='redes-social' id='rede-social'>
            {redes.map((rede: {
                src: string,       
                name: string,
                href: string
            }) => {
                return (
                    <a
                        href={`${window.location.href.split('/')[2]}${rede.href}`}
                        target="_blank"
                        id='lis-redes'
                    >
                        <img src={rede.src} width={200} />
                    </a>
                );
            })}
            </div>
        </div>
    );
};

export default RedesSociais;