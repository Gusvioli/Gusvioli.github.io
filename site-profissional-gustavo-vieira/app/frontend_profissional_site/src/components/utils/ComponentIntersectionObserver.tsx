import { InView } from 'react-intersection-observer';
import { useContext } from 'react';
import Context from '../../context/Context';

type quem = {
  q: string;

};

const ComponentIntersectionObserver = ({q}: quem) => {
  const {
    setInspectElement,
  } = useContext(Context);
  
  return (
    <InView as="div" onChange={(inView) => 
      {
        console.log(q, inView);
        setInspectElement([{
          q,
          inView
        }])
      }
    } />
  );
};

export default ComponentIntersectionObserver;