import { useContext } from 'react';
import '../styles/components-styles/fotoDescricao.css';
import { FotoDescricaoTypes } from './types/FotoDescricaoTypes';
import ComponentIntersectionObserver from './utils/ComponentIntersectionObserver';
import Context from '../context/Context';

const FotoDescricao = ({
    // foto: { src, alt },
    nome,
    descricao
}: FotoDescricaoTypes) => {
    const {setMenu} = useContext(Context);  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickClose = (e: any) => {
        if (e.target.id === "home") {
            setMenu(false);
        }
    }
    return (
        <div className="foto-descricao" id="home" onClick={(e) => handleClickClose(e)}>
            <ComponentIntersectionObserver q="foto-descricao" />
            {/* <div className="foto">
                <img
                    src={src}
                    alt={alt}
                />
            </div> */}
            <div className="descricao">
                <h1 className='show-nome' id="show-nome">{nome}</h1>
                <p className='descricao-p'  id="descricao-p">{descricao}</p>
            </div>
        </div>
    );
};

export default FotoDescricao;