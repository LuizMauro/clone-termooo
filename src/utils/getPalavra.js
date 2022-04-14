import palavras from "../offlineData/palavras.json";

function removeAcento(text) {
  text = text.toLowerCase();
  text = text.replace(new RegExp("[ÁÀÂÃ]", "gi"), "a");
  text = text.replace(new RegExp("[ÉÈÊ]", "gi"), "e");
  text = text.replace(new RegExp("[ÍÌÎ]", "gi"), "i");
  text = text.replace(new RegExp("[ÓÒÔÕ]", "gi"), "o");
  text = text.replace(new RegExp("[ÚÙÛ]", "gi"), "u");
  text = text.replace(new RegExp("[Ç]", "gi"), "c");
  return text.toUpperCase();
}

export const getPalavra = () => {
  var rand = ~~(Math.random() * palavras.palavras.length);
  const palavraSelected = removeAcento(palavras.palavras[rand].palavra);

  const answerFinal = [
    palavraSelected.charAt(0),
    palavraSelected.charAt(1),
    palavraSelected.charAt(2),
    palavraSelected.charAt(3),
    palavraSelected.charAt(4),
  ];

  return answerFinal;
};


