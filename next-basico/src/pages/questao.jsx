import { useEffect, useState } from "react";

export default function questao() {
  const [questao, setQuestao] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/123")
      .then((response) => response.json())
      .then((questao) => {
        setQuestao(questao);
      });
  });

  function renderizarRespostas() {
    if (questao) {
      return questao.respostas.map((resposta, index) => {
        return (
          <div key={index}>
            <input type="radio" name="resposta" value={index} />
            {resposta}
          </div>
        );
      });
    }

    return false;
  }

  return (
    <div>
      {" "}
      <h1>Questão</h1>
      <div>
        <span>{questao?.enunciado}</span>
        <ul>{renderizarRespostas()}</ul>
      </div>{" "}
    </div>
  );
}
