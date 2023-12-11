import { useContext } from 'react';
import '../styles/components-styles/menu.css';
import Context from '../context/Context';

const Menu = () => {    
    const {menu, setMenu} = useContext(Context);   
    if (menu) {
        document.getElementById("menu")?.classList.remove("menu-zero");
        document.getElementById("menu")?.classList.add("menu");
    } else {
        document.getElementById("menu")?.classList.add("menu-zero");
        document.getElementById("menu")?.classList.remove("menu");
    }
    return (
        <>
        {            
            menu ? (
                <>
                    <div className="menu" id="menu">
                        <a href="#home">Home</a>
                        <a href="#habilidades">Habilidades</a>
                        <a href="#meusprojetos">Meus projetos</a>
                        <a href="#redes">Redes</a>
                        <a href="#services">Serviços</a>
                        {/* <a href="#contact">Contato</a> */}
                    </div>
                    <div className="menu-zero" id="menu-zero">
                        <a className="traco" onClick={() => setMenu(!menu)}>
                            <div className='traco1-x'></div>
                            <div className='traco2-x'></div>
                        </a>
                    </div>
                </>
            ) : (
                <div className="menu-zero" id="menu-zero">
                    <a className="traco" onClick={() => setMenu(!menu)}>
                        <div className='traco1'></div>
                        <div className='traco2'></div>
                        <div className='traco3'></div>
                    </a>
                </div>
            )
        }
        </>
    )
};

export default Menu;