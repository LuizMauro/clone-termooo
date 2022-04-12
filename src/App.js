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

const answerFinal= ['P', "I", "L", "A", "R"];



function App() {
  const [answer, setAnswer] = useState([]);
  const [currentNivel, setCurrentNivel] = useState(_currentNivel);


  const getLetterIndex = (letter) => {
    let array = [];
    answerFinal.map((item, index) => {
      if(letter === item){
        array.push(
          {
            letter: letter,
            index: index
          }
        )
      }      
    });


    return array;

  }


  async function onSubmit(value) {
    setCurrentNivel(currentNivel + 1);

    let ArrayTeste = [];

    let teste = answerFinal;


    console.log(value.arrayAnswer);


    // eslint-disable-next-line array-callback-return
    value.arrayAnswer.map((itemValue, indexValue) => {

      console.log(indexValue);

      // const result = answerFinal.indexOf(itemValue);

      const result = getLetterIndex(itemValue);

      let obj = {
               letter: itemValue,
              positionCorrect: false,
              isExist: false,
      }

      if(result.length > 0){
        result.map((item) => {
          if(item.letter === itemValue && item.index === indexValue){
            obj = {
              letter: itemValue,
              positionCorrect: true,
              isExist: true,
            }
          }else if(obj.positionCorrect !== true){
            obj = {
              letter: itemValue,
              positionCorrect: false,
              isExist: true,
            }
          }
        });
      }else {
        obj = {
          letter: itemValue,
          positionCorrect: false,
          isExist: false,
        }
      }

      ArrayTeste.push(obj)

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
    <InputOrSkeleton currentNivel={currentNivel} index={6} answer={answer[5]} onSubmit={(e) => onSubmit(e)} />
  
    </ContainerInputs>
  </FlexFullCenter>
  );
}

export default App;