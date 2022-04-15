import React from "react";

import "./index.css";

const letraLine1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const letraLine2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const letraLine3 = ["Z", "X", "C", "V", "B", "N", "M"];

// const palavrasCertas = ["Q", "A"];
// const palavrasNaoExistentes = ["B"];

function KeyBoard({
  palavrasCertas = [],
  palavrasNaoExistentes = [],
  palavrasExistem,
  onChange,
}) {
  const Line1 = () => {
    return (
      <div className="line1">
        {letraLine1.map((letra, index) => {
          if (palavrasCertas.includes(letra)) {
            return (
              <span
                style={{ background: "#22b168" }}
                key={index}
                onClick={() => onChange(letra)}
              >
                {letra}
              </span>
            );
          }

          if (palavrasNaoExistentes.includes(letra)) {
            return (
              <span
                style={{ background: "#465364" }}
                key={index}
                onClick={() => onChange(letra)}
              >
                {letra}
              </span>
            );
          }

          if (palavrasExistem.includes(letra)) {
            return (
              <span
                style={{ background: "#f7a62e" }}
                key={index}
                onClick={() => onChange(letra)}
              >
                {letra}
              </span>
            );
          }

          return (
            <span key={index} onClick={() => onChange(letra)}>
              {letra}
            </span>
          );
        })}
      </div>
    );
  };

  const Line2 = () => {
    return (
      <div className="line2">
        {letraLine2.map((letra, index) => {
          if (palavrasCertas.includes(letra)) {
            return (
              <span
                style={{ background: "#22b168" }}
                key={index}
                onClick={() => onChange(letra)}
              >
                {letra}
              </span>
            );
          }

          if (palavrasNaoExistentes.includes(letra)) {
            return (
              <span
                style={{ background: "#465364" }}
                key={index}
                onClick={() => onChange(letra)}
              >
                {letra}
              </span>
            );
          }

          if (palavrasExistem.includes(letra)) {
            return (
              <span
                style={{ background: "#f7a62e" }}
                key={index}
                onClick={() => onChange(letra)}
              >
                {letra}
              </span>
            );
          }

          return (
            <span key={index} onClick={() => onChange(letra)}>
              {letra}
            </span>
          );
        })}
      </div>
    );
  };

  const Line3 = () => {
    return (
      <div className="line3">
        {letraLine3.map((letra, index) => {
          if (palavrasCertas.includes(letra)) {
            return (
              <span
                style={{ background: "#22b168" }}
                key={index}
                onClick={() => onChange(letra)}
              >
                {letra}
              </span>
            );
          }

          if (palavrasNaoExistentes.includes(letra)) {
            return (
              <span
                style={{ background: "#465364" }}
                key={index}
                onClick={() => onChange(letra)}
              >
                {letra}
              </span>
            );
          }

          if (palavrasExistem.includes(letra)) {
            return (
              <span
                style={{ background: "#f7a62e" }}
                key={index}
                onClick={() => onChange(letra)}
              >
                {letra}
              </span>
            );
          }

          return (
            <span key={index} onClick={() => onChange(letra)}>
              {letra}
            </span>
          );
        })}
        <span>ENTER</span>
      </div>
    );
  };

  return (
    <div className="base">
      <Line1 />
      <Line2 />
      <Line3 />
    </div>
  );
}

export { KeyBoard };
