import React, { useState } from 'react';
import Context from './Context';
import seedDataSkills from './data/seedDataSkills.json';
import seedDataRedes from './data/seedDataRedes.json';
import seedDataProjetos from './data/seedDataProjetos.json';

function Provider({ children }: { children: React.ReactNode }) {
  const [inspectElement, setInspectElement] = useState(
    [
      {
        q: 'foto-descricao',
        inView: true
      }
    ]
  );
  const [menu, setMenu] = useState(false);
  const [skills, setSkills] = useState<object>(seedDataSkills);
  const [redes, setRedes] = useState<object>(seedDataRedes);
  const [projetos, setProjetos] = useState<object>(seedDataProjetos);
  const [cross, setCross] = useState(0);
  const [tam, setTam] = useState(6);
  const [
      exibirPopUpInfoMeusProjetos,
      setExibirPopUpInfoMeusProjetos
  ] = useState(false);
  const [objExibirPopUp, setObjExibirPopUp] = useState<object>({});
  
  const memorize = React.useMemo(
    () => ({
      inspectElement, setInspectElement,
      skills, setSkills,
      menu, setMenu,
      redes, setRedes,
      cross, setCross,
      tam, setTam,
      projetos, setProjetos,
      exibirPopUpInfoMeusProjetos,
      setExibirPopUpInfoMeusProjetos,
      objExibirPopUp, setObjExibirPopUp
    }),
    [
      inspectElement, setInspectElement,
      skills, setSkills,
      menu, setMenu,
      redes, setRedes,
      cross, setCross,
      tam, setTam,
      projetos, setProjetos,
      exibirPopUpInfoMeusProjetos,
      setExibirPopUpInfoMeusProjetos,
      objExibirPopUp, setObjExibirPopUp
    ],
  )
  return <Context.Provider value={memorize}>{children}</Context.Provider>
}

export default Provider
