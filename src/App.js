import React, { useState } from "react";
import { FlexFullCenter, ContainerInputs } from "./styles";
import { InputOrSkeleton } from "./components/InputOrSkeleton";
import { answerTest } from './utils/answerTest'

const _currentNivel = 1;

const answerFinal = ["P", "I", "L", "A", "R"];

function App() {
  const [answer, setAnswer] = useState([]);
  const [finish, setFinish] = useState(false);
  const [countTries, setCountTries] = useState(1);
  const [currentNivel, setCurrentNivel] = useState(_currentNivel);


  async function onSubmit(value) {
    answerTest(value, answerFinal, currentNivel, setCurrentNivel, setAnswer, answer, setFinish, setCountTries);
  }

  return (
    <FlexFullCenter>
      <ContainerInputs>
        <InputOrSkeleton
          currentNivel={currentNivel}
          index={1}
          answer={answer[0]}
          onSubmit={(e) => onSubmit(e)}
          finish={finish}
          countTries={countTries}
        />
        <InputOrSkeleton
          currentNivel={currentNivel}
          index={2}
          answer={answer[1]}
          onSubmit={(e) => onSubmit(e)}
          finish={finish}
          countTries={countTries}
        />
        <InputOrSkeleton
          currentNivel={currentNivel}
          index={3}
          answer={answer[2]}
          onSubmit={(e) => onSubmit(e)}
          finish={finish}
          countTries={countTries}
        />
        <InputOrSkeleton
          currentNivel={currentNivel}
          index={4}
          answer={answer[3]}
          onSubmit={(e) => onSubmit(e)}
          finish={finish}
          countTries={countTries}
        />
        <InputOrSkeleton
          currentNivel={currentNivel}
          index={5}
          answer={answer[4]}
          onSubmit={(e) => onSubmit(e)}
          finish={finish}
          countTries={countTries}
        />
        <InputOrSkeleton
          currentNivel={currentNivel}
          index={6}
          answer={answer[5]}
          onSubmit={(e) => onSubmit(e)}
          finish={finish}
          countTries={countTries}
        />
      </ContainerInputs>
    </FlexFullCenter>
  );
}

export default App;
