import React, { useRef, useContext } from 'react';
import Context from '../context/Context';
import emailjs from '@emailjs/browser';
import '../css/Emailjs.css';

export const ContactUs = () => {
  const { forms, setForms } = useContext(Context);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (forms.formContactName !== undefined
      && forms.formContactEmail !== undefined
      && forms.formContactMsg !== undefined) {
        emailjs.sendForm('service_hjcos48', 'template_m5z349k', form.current, 'H-Ayu5S16mKkJzt5H')
        .then((result) => {
          window.alert('Mensagem enviada! Muito obrigado, assim que possível irei responder');
          document.getElementById('user_name').value='';
          document.getElementById('user_email').value='';
          document.getElementById('message').value='';
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
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

  return (
    <section className="Form-main">
      <h1 className='Contato'>Contato</h1>
      <div className='enviado'>Enviado!</div>
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