import React, { useState } from "react";
import { FlexFullCenter, ContainerInputs } from "./styles";
import { InputOrSkeleton } from "./components/InputOrSkeleton";
import { KeyBoard } from "./components/keyBoard";
import { answerTest } from "./utils/answerTest";
import { getPalavra } from "./utils/getPalavra";
import { ControleWins } from "./components/ControleWins";

const _currentNivel = 1;
const answerFinal = getPalavra();

console.log(answerFinal);

function App() {
  const [answer, setAnswer] = useState([]);
  const [finish, setFinish] = useState(false);
  const [countTries, setCountTries] = useState(1);
  const [currentNivel, setCurrentNivel] = useState(_currentNivel);
  const [palavrasCertas, setPalavrasCertas] = useState([]);
  const [palavrasExistem, setPalavrasExistem] = useState([]);
  const [palavrasNaoExistentes, setPalavrasNaoExistentes] = useState([]);

  async function onSubmit(value) {
    answerTest(
      value,
      answerFinal,
      currentNivel,
      setCurrentNivel,
      setAnswer,
      answer,
      setFinish,
      setCountTries,
      palavrasCertas,
      palavrasNaoExistentes,
      palavrasExistem,
      setPalavrasCertas,
      setPalavrasNaoExistentes,
      setPalavrasExistem
    );
  }

  return (
    <FlexFullCenter>
      <ControleWins />
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

      <KeyBoard
        onChange={(e) => {
          console.log(e);
        }}
        palavrasCertas={palavrasCertas}
        palavrasNaoExistentes={palavrasNaoExistentes}
        palavrasExistem={palavrasExistem}
      />
    </FlexFullCenter>
  );
}

export default App;
