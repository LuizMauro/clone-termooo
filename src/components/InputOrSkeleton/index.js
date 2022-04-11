import React, { useState } from 'react';
import Input from '../../lib/Input'
import { SkeletonNiveis } from '../SkeletonNiveis';
import { SkeletonNiveisAnswer } from '../SkeletonNiveisAnswer';

function InputOrSkeleton({currentNivel, index, answer, onSubmit}) {
  const [value, setValue] = useState('');

  const checkIsSubmit = (e) => {
    console.log(e.keyCode);
    if(value.length === 5 && e.keyCode === 13){

      const arrayAnswer = [
        value.charAt(0),
        value.charAt(1),
        value.charAt(2),
        value.charAt(3),
        value.charAt(4),
      ]

      onSubmit({currentNivel, index, value, arrayAnswer});
    }
  }


  function renderInputOrSekeleton(index){
    if(currentNivel === index){
      return <Input fields={5} onKeyDown={(e) => checkIsSubmit(e)} onChange={(e) => setValue(e)} value={value} forceUppercase  />
    }

    if(currentNivel < index ){
      return <SkeletonNiveis />;
    }

    if(currentNivel > index ){
      return <SkeletonNiveisAnswer answer={answer} />;
    }
}

  return <>
    {renderInputOrSekeleton(index)}
  </>;
}

export  {InputOrSkeleton};