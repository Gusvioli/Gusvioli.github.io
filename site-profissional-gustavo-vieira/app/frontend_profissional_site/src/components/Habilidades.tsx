import { useContext } from 'react';
import '../styles/components-styles/habilidades.css';
import ComponentIntersectionObserver from './utils/ComponentIntersectionObserver';
import Context from '../context/Context';
import seedDataSkills from '../context/data/seedDataSkills.json';

const Habilidades = () => {
    const { inspectElement, skills, setMenu, setSkills } = useContext(Context);

    if (inspectElement[0].q === "habilidades" && inspectElement[0].inView || inspectElement[0].q === "foto-descricao"&& inspectElement[0].inView === false) {
        document.getElementById("habilidades-h1")?.classList.add("habilidades-h1");
    } else {
        document.getElementById("habilidades-h1")?.classList.remove("habilidades-h1");
    }  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickClose = (e: any) => {        
        if (
            e.target.id === "habilidades"
            || e.target.id === "habilidades-ul-inter") {
            setMenu(false);
        }
    }

    const handleOpenDescription = (n: {
        url: string;
        name: string;
        percent: number;
        description: string;
    }) => {
        document.getElementById('habilidades-ul-inter')?.classList.remove("habilidades-ul-inter");
        setSkills([n]);
        document.getElementById('habilidades-ul-inter')?.classList.add("habilidades-ul-inter-unit");
        document.getElementById('habilidades-ul-inter')?.classList.remove("habilidades-ul-inter");
        document.getElementById('habilidades-ul-inter')?.classList.add("habilidades-ul-inter-Unit");
    };
    
    const handleCloseDescription = () => {
        document.getElementById('habilidades-ul-inter')?.classList.add("habilidades-ul-inter");
        setSkills(seedDataSkills);
        document.getElementById('habilidades-ul-inter')?.classList.remove("habilidades-ul-inter-unit");
        document.getElementById('habilidades-ul-inter')?.classList.add("habilidades-ul-inter");
        document.getElementById('habilidades-ul-inter')?.classList.remove("habilidades-ul-inter-Unit");
    };

    const handleNextDescription = () => {
        const index = seedDataSkills.indexOf(skills[0]);
        if (index === seedDataSkills.length - 1) {
            setSkills([seedDataSkills[0]]);
        } else {
            setSkills([seedDataSkills[index + 1]]);
        }
    };

    const handlePrevDescription = () => {
        const index = seedDataSkills.indexOf(skills[0]);
        if (index === 0) {
            setSkills([seedDataSkills[seedDataSkills.length - 1]]);
        } else {
            setSkills([seedDataSkills[index - 1]]);
        }
    };
    
    return (
        <div
            className="habilidades"
            id="habilidades"
            onClick={(e) => handleClickClose(e)}
        >
        <ComponentIntersectionObserver q="habilidades" />
        <h1 className='habilidades-h1' id='habilidades-h1'>Habilidades</h1>
        <ul
            className='habilidades-ul-inter'
            id="habilidades-ul-inter"
            onClick={(e) => handleClickClose(e)}
        > 

            {skills.map((img: {
                url: string;
                name: string;
                percent: number;
                description: string;
            }, index: number) => {
                return (
                    <>
                    <li
                        key={index}
                        className={img.name}
                        id={'lis'}
                        onClick={() => handleOpenDescription(img)}
                    >
                        <span>{img.name.toLocaleUpperCase()}</span>
                    </li> 
                    {skills.length === 1 &&
                        <>                         
                            <span
                                className='navegarAnt'
                                onClick={() => handleNextDescription()}
                            >
                                {'←'}
                            </span>
                            <span
                                className='navegarPost'
                                onClick={() => handlePrevDescription()}
                            >
                                {'→'}
                            </span>
                            <div
                                className="menu-zero"
                                id="menu-zero"
                                onClick={() => handleCloseDescription()}
                            >
                                <a className="traco">
                                    <div className='traco1-x'></div>
                                    <div className='traco2-x'></div>
                                </a>
                            </div>
                            <p>{img.description}</p>
                        </>}
                    </>
                )            
            })}
        </ul>
    </div>
    )
};

export default Habilidades;
