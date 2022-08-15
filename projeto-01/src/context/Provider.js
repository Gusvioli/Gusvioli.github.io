import React, { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [title, setTitle] = useState('Bem vindo ao meu Portfólio');
  const [description, setDescription] = useState('Este é um projeto de desenvolvimento de um Portfólio');

  return (
    <Context.Provider value={ { title, setTitle, description, setDescription } }>
      {children}
    </Context.Provider>
  );
}

export default Provider;