const getLetterIndex = (letter, answerFinal) => {
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

export const answerTest = (
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
) => {
  setCurrentNivel(currentNivel + 1);
  let palavrasExistem2 = palavrasExistem;
  let palavrasNaoExistentes2 = palavrasNaoExistentes;
  let palavrasCertas2 = palavrasCertas;

  let tries = [];
  let arrayLetterControl = [];

  var clearLetterRepetitions = value.arrayAnswer.filter(function (item, i) {
    return value.arrayAnswer.indexOf(item) === i;
  });

  clearLetterRepetitions.forEach((item, index) => {
    let value = getLetterIndex(item, answerFinal);
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
            palavrasCertas2.push(itemValue);
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
            palavrasExistem2.push(itemValue);
            obj = {
              letter: itemValue,
              positionCorrect: false,
              isExist: true,
            };
          }
        });
      } else {
        palavrasNaoExistentes2.push(itemValue);
        obj = {
          letter: itemValue,
          positionCorrect: false,
          isExist: false,
        };
      }
      tries.push(obj);
    } else {
      palavrasNaoExistentes2.push(itemValue);
      const obj = {
        letter: itemValue,
        positionCorrect: false,
        isExist: false,
      };
      tries.push(obj);
    }
  });

  let count = 0;
  tries.forEach((item) => {
    if (item.positionCorrect === true) {
      count++;
    }
  });

  setPalavrasCertas(palavrasCertas2);
  setPalavrasNaoExistentes(palavrasNaoExistentes2);
  setPalavrasExistem(palavrasExistem2);
  setAnswer([...answer, tries]);

  if (count === 5) {
    setFinish(true);
    setCountTries(currentNivel);

    let vitorias = localStorage.getItem("vitorias")
      ? localStorage.getItem("vitorias")
      : 0;
    vitorias++;
    localStorage.setItem("vitorias", vitorias);

    let totalJogos = localStorage.getItem("totalJogos")
      ? localStorage.getItem("totalJogos")
      : 0;
    totalJogos++;
    localStorage.setItem("totalJogos", totalJogos);

    alert("Parabéns, você acertou todas as letras!");

    return;
  }

  if (currentNivel === 6) {
    let totalJogos = localStorage.getItem("totalJogos")
      ? localStorage.getItem("totalJogos")
      : 0;
    totalJogos++;
    localStorage.setItem("totalJogos", totalJogos);
    setFinish(true);
    setCountTries(currentNivel);

    alert("Você perdeu!");

    return;
  }
};
