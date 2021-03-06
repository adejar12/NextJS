import { useState } from "react";

function Form() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  async function salvarUsuario() {
    await fetch("/api/F", {
      method: "POST",
      body: JSON.stringify({
        nome,
        idade,
      }),
    });

    const resp = await fetch("/api/form");
    const usuarios = await resp.json();
    setUsuarios(usuarios);
  }

  function renderizarUsuarios() {
    return usuarios.map((usuario, i) => {
      return (
        <li key={i}>
          {usuario.nome} tem {usuario.idade} idade
        </li>
      );
    });
  }

  return (
    <div style={{ marginLeft: 70 }}>
      <h1>Integrando com a API</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <input
        type="number"
        value={idade}
        onChange={(e) => {
          // o + só quer dizer que para manter o valor numerico
          setIdade(+e.target.value);
        }}
      />
      <button onClick={salvarUsuario}>Enviar</button>
      <ul>{renderizarUsuarios()}</ul>
    </div>
  );
}

export default Form;
