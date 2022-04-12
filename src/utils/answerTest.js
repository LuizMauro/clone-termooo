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
  setCountTries
) => {
  setCurrentNivel(currentNivel + 1);

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

  let count = 0;
  tries.forEach((item) => {
    if (item.positionCorrect === true) {
      count++;
    }
  });

  setAnswer([...answer, tries]);

  if (count === 5) {
    setFinish(true);
    setCountTries(currentNivel);
  }
};
