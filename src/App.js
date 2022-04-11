import React, { useState } from 'react';
import { FlexFullCenter, ContainerInputs } from './styles'
import { InputOrSkeleton } from './components/InputOrSkeleton'


const _answer = [
  {
    letter: 'D',
    positionCorrect: false,
    isExist: false,
  },
  {
    letter: 'E',
    positionCorrect: true,
    isExist: true,
  },
  {
    letter: 'S',
    positionCorrect: true,
    isExist: true,
  },
  {
    letter: 'E',
    positionCorrect: false,
    isExist: true,
  },
  {
    letter: 'T',
    positionCorrect: false,
    isExist: true,
  }
];

const _currentNivel = 1;

const answerFinal= ['S', "I", "T", "I", "O"];



function App() {
  const [answer, setAnswer] = useState([]);
  const [currentNivel, setCurrentNivel] = useState(_currentNivel);


  // const teste = () => {
  //   answerFinal.map((itemFinal, indexFinal) => {
  //     let obj = {};
  //     if(itemValue == itemFinal && indexValue === indexFinal){
  //       obj = {
  //         letter: itemValue,
  //         positionCorrect: true,
  //         isExist: true,
  //       }
  //     }else if(itemValue === itemFinal && indexValue !== indexFinal){
  //       obj = {
  //         letter: itemValue,
  //         positionCorrect: false,
  //         isExist: true,
  //       }
  //     }else {
  //       obj = {
  //         letter: itemValue,
  //         positionCorrect: false,
  //         isExist: false,
  //       }
  //     }
  //     ArrayTeste.push(obj);
  //   })
  // }


  async function onSubmit(value) {
    setCurrentNivel(currentNivel + 1);

    let ArrayTeste = [];

    let teste = answerFinal;


    console.log(value.arrayAnswer);


    // eslint-disable-next-line array-callback-return
    value.arrayAnswer.map((itemValue, indexValue) => {

      console.log(indexValue);

      const result = answerFinal.indexOf(itemValue);

      console.log(result);

      if(result === indexValue){
        teste[indexValue] = "";
        ArrayTeste.push({
          letter: itemValue,
          positionCorrect: true,
          isExist: true,
        })
      }else if(result !== indexValue && result !== -1){
        ArrayTeste.push({
          letter: itemValue,
          positionCorrect: false,
          isExist: true,
        })
      }else if(result === -1){
        ArrayTeste.push({
          letter: itemValue,
          positionCorrect: false,
          isExist: false,
        })
      }
    });
    

    setAnswer([...answer, ArrayTeste]);
    console.log(ArrayTeste);
  }

  return (
  <FlexFullCenter>
    <ContainerInputs>

    <InputOrSkeleton currentNivel={currentNivel} index={1} answer={answer[0]} onSubmit={(e) => onSubmit(e)} />
    <InputOrSkeleton currentNivel={currentNivel} index={2} answer={answer[1]} onSubmit={(e) => onSubmit(e)} />
    <InputOrSkeleton currentNivel={currentNivel} index={3} answer={answer[2]} onSubmit={(e) => onSubmit(e)} />
    <InputOrSkeleton currentNivel={currentNivel} index={4} answer={answer[3]} onSubmit={(e) => onSubmit(e)} />
    <InputOrSkeleton currentNivel={currentNivel} index={5} answer={answer[4]} onSubmit={(e) => onSubmit(e)} />
    <InputOrSkeleton currentNivel={currentNivel} index={5} answer={answer[5]} onSubmit={(e) => onSubmit(e)} />

    </ContainerInputs>
  </FlexFullCenter>
  );
}

export default App;