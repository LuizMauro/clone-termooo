import React, { useState } from 'react';
import Input from '../../lib/Input'
import { SkeletonNiveis } from '../SkeletonNiveis';
import { SkeletonNiveisAnswer } from '../SkeletonNiveisAnswer';

function InputOrSkeleton({currentNivel, index, answer, onSubmit, finish, countTries}) {
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

    if(currentNivel === index && !finish){
      console.log("entrou")
      return <Input fields={5} onKeyDown={(e) => checkIsSubmit(e)} onChange={(e) => setValue(e)} value={value} forceUppercase  />
    }

    if(currentNivel > index || (finish && countTries > index) ){
      return <SkeletonNiveisAnswer answer={answer}  />;
    }

    if(currentNivel < index || (finish && countTries !== index)){
      return <SkeletonNiveis />;
    }

    
}

  return <>
    {renderInputOrSekeleton(index)}
  </>;
}

export  {InputOrSkeleton};