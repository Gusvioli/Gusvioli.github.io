import whatsapp from '../assets/whatsapp-svgrepo-com-verde.svg';
import '../styles/components-styles/WhatsApp.css';

const Whatsapp = () => {
    return (
        <a
            href='http://api.whatsapp.com/send?1=pt_BR&phone=5521980716924'
            target="_blank"
            rel="noreferrer"
            className="whatsapp"
        >
        <img src={whatsapp} width={50} />
        </a>
    );
};

export default Whatsapp;
