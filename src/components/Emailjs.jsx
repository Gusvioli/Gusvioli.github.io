import React, { useRef, useContext } from 'react';
import Context from '../context/Context';
import emailjs from '@emailjs/browser';
import '../css/Emailjs.css';

export const ContactUs = () => {
  const { forms, setForms } = useContext(Context);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (forms.formContactName !== ''
      && forms.formContactEmail !== ''
      && forms.formContactMsg !== '') {
        emailjs.sendForm('service_1ujdbwq', 'template_m5z349k', form.current, 'H-Ayu5S16mKkJzt5H').then((result) => {
          setForms({ 
            formContactName: '',
            formContactEmail: '',
            formContactMsg: '',
            send: 1 
          });
        }, (error) => {
          console.log(error.text);
        });
    }
    setForms({ 
      formContactName: '',
      formContactEmail: '',
      formContactMsg: '',
      send: 0 
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'user_name') {
      setForms({ ...forms, formContactName: value });
    }
    if (name === 'user_email') {
      setForms({ ...forms,  formContactEmail: value });
    }
    if (name === 'message') {
      setForms({ ...forms,  formContactMsg: value });
    }
  }

  const msgEnviada = () => {
    if (forms.send === 1) {
      const msg ='Mensagem enviada! Muito obrigado!';
      return  msg;
    }
  };
  const msgCss = () => {
    if (forms.send === 1) {
      const msgCss = {
        padding: 10,
        color: `black`,
        backgroundColor: `green`,
        width: '73%',
        textAlign: 'center',
        fontSize: '22px',
      };
      return msgCss;
    }
  };

  return (
    <section className="Form-main">
      <h1 id='contato' className='Contato'><span></span>Contato</h1>
      <div style={ msgCss() }>{ msgEnviada() }</div>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder='Nome'
          value={ forms.formContactName }
          onChange={ handleInput } />
        <input
          type="email"
          name="user_email"
          id="user_email"
          placeholder='E-mail'
          value={ forms.formContactEmail }
          onChange={ handleInput }  />
        <textarea
          name="message"
          id="message"
          placeholder='Mensagem'
          value={ forms.formContactMsg }
          onChange={ handleInput }  />
        <input className='input-submit' type="submit" value="Enviar" />
      </form>
    </section>
    
   
  );
};

export default ContactUs;