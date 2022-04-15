import React, { useEffect, useState } from "react";

// import { Container } from './styles';

function ControleWins() {
  const [vitorias, setVitorias] = useState(0);
  const [totalJogos, setTotalJogos] = useState(0);

  useEffect(() => {
    localStorage.getItem("vitorias") &&
      setVitorias(localStorage.getItem("vitorias"));
    localStorage.getItem("totalJogos") &&
      setTotalJogos(localStorage.getItem("totalJogos"));
  }, []);

  return (
    <div>
      <h4>Vitórias: {vitorias}</h4>
      <h4>Total de jogos: {totalJogos}</h4>
    </div>
  );
}

export { ControleWins };
