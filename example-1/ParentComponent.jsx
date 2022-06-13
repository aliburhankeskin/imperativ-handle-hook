import React from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {

  const childComponentRef = React.useRef();

  // ChildComponent deki "change" fonksiyonu tetiklenir
  const changeColor = () => childComponentRef.current.change();

  return (
    <div>

      <button onClick={changeColor}>Rengi Değiştir</button>

      <ChildComponent ref={childComponentRef} />

    </div>    
  );

}
