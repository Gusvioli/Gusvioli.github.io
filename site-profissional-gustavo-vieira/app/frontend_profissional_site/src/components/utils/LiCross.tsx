import { useContext } from "react";
import Context from "../../context/Context";

type Props = {
    n: number;
    cross: number;
    tam: number;
};

const LiCross = ({n, cross, tam}: Props) => {
    const {projetos,
        exibirPopUpInfoMeusProjetos,
        setExibirPopUpInfoMeusProjetos,
        setObjExibirPopUp} = useContext(Context);
    const ret = cross+n > tam ? (cross+n) - tam : cross+n;

    const imgCross = {
        backgroundImage: `url(${projetos[ret-1].img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "local",
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSaibaMais = (e: any) => {
        setExibirPopUpInfoMeusProjetos(!exibirPopUpInfoMeusProjetos);
        setObjExibirPopUp(e)
    };

    return (
        <li
            className='li-ul-meusprojetos'
            id='li-ul-meusprojetos'
            style={imgCross}
        >
            <img
                className="div-li-img"
                src="/src/assets/rocket-launch.png"
                onClick={() => window.open(projetos[ret - 1].link, "_blank")}
                title="Abrir projeto"
            />
            <button
                className="div-li-button"
                onClick={() => handleSaibaMais(projetos[ret - 1])}
            >
                Saiba mais
            </button>        
        </li> 
    );
};

export default LiCross;