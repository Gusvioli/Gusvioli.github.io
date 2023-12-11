import { useContext } from 'react';
import '../styles/components-styles/contatos.css'
import ComponentIntersectionObserver from './utils/ComponentIntersectionObserver';
import Context from '../context/Context';

const Contatos = () => {
    const {setMenu} = useContext(Context);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickClose = (e: any) => {
        if (e.target.id === "contact") {
            setMenu(false);
        }
    }
    return (
        <div
            className="contatos"
            id="contact"
            onClick={(e) => handleClickClose(e)}
        >
        <ComponentIntersectionObserver q="contatos" />
            <h1>Contatos</h1>
            {/* <ul>
                <li>
                    <a href=""></a>
                </li>
                <li>
                    <a href=""></a>
                </li>
                <li>
                    <a href=""></a>
                </li>
            </ul> */}
        </div>
    );
};

export default Contatos;