import React, { useState } from "react";
import { FlexFullCenter, ContainerInputs } from "./styles";
import { InputOrSkeleton } from "./components/InputOrSkeleton";

const _currentNivel = 1;

const answerFinal = ["P", "I", "L", "A", "R"];

function App() {
  const [answer, setAnswer] = useState([]);
  const [currentNivel, setCurrentNivel] = useState(_currentNivel);

  const getLetterIndex = (letter) => {
    let array = [];
    answerFinal.forEach((item, index) => {
        if (letter === item) {
          array.push({
            letter: letter,
            index: index,
          });
        }
      });
    return { acertos: 0, exist: 0, array };
  };

  async function onSubmit(value) {
    setCurrentNivel(currentNivel + 1);

    let tries = [];
    let arrayLetterControl = [];

    var clearLetterRepetitions = value.arrayAnswer.filter(function (item, i) {
      return value.arrayAnswer.indexOf(item) === i;
    });

    clearLetterRepetitions.forEach((item, index) => {
      let value = getLetterIndex(item);
      arrayLetterControl.push(value);
    });

    // eslint-disable-next-line array-callback-return
    value.arrayAnswer.map((itemValue, indexValue) => {
      const exists = arrayLetterControl.filter(
        (item) => item.array[0]?.letter === itemValue
      );

      if (exists.length > 0 && exists[0].array[0]) {
        const result = exists[0];
        let obj = {
          letter: itemValue,
          positionCorrect: false,
          isExist: false,
        };

        const resultTamanho = result.array.length;

        if (result.array.length > 0) {
          result.array.forEach((item) => {
            if (item.letter === itemValue && item.index === indexValue) {
              result.acertos = result.acertos + 1;
              obj = {
                letter: itemValue,
                positionCorrect: true,
                isExist: true,
              };
            } else if (
              obj.positionCorrect !== true &&
              result.acertos < resultTamanho &&
              result.exist < resultTamanho
            ) {
              result.exist = result.exist + 1;
              obj = {
                letter: itemValue,
                positionCorrect: false,
                isExist: true,
              };
            }
          });
        } else {
          obj = {
            letter: itemValue,
            positionCorrect: false,
            isExist: false,
          };
        }
        tries.push(obj);
      } else {
        const obj = {
          letter: itemValue,
          positionCorrect: false,
          isExist: false,
        };
        tries.push(obj);
      }
    });

    setAnswer([...answer, tries]);
    console.log(tries);
  }

  return (
    <FlexFullCenter>
      <ContainerInputs>
        <InputOrSkeleton
          currentNivel={currentNivel}
          index={1}
          answer={answer[0]}
          onSubmit={(e) => onSubmit(e)}
        />
        <InputOrSkeleton
          currentNivel={currentNivel}
          index={2}
          answer={answer[1]}
          onSubmit={(e) => onSubmit(e)}
        />
        <InputOrSkeleton
          currentNivel={currentNivel}
          index={3}
          answer={answer[2]}
          onSubmit={(e) => onSubmit(e)}
        />
        <InputOrSkeleton
          currentNivel={currentNivel}
          index={4}
          answer={answer[3]}
          onSubmit={(e) => onSubmit(e)}
        />
        <InputOrSkeleton
          currentNivel={currentNivel}
          index={5}
          answer={answer[4]}
          onSubmit={(e) => onSubmit(e)}
        />
        <InputOrSkeleton
          currentNivel={currentNivel}
          index={6}
          answer={answer[5]}
          onSubmit={(e) => onSubmit(e)}
        />
      </ContainerInputs>
    </FlexFullCenter>
  );
}

export default App;
