import Link from "next/link";
import router from "next/router";

function routes() {
  function navegacaoSimples(url) {
    router.push(url);
  }

  function navegacaoComParams(url, parametros) {
    router.push({ pathname: url, query: { ...parametros } });
  }

  return (
    <div style={{ marginLeft: 70 }}>
      <h1>Tipos de Rotas</h1>
      <li style={{ fontWeight: 800, fontSize: 18 }}>Navegação Com Link</li>
      <div>
        <ul>
          <Link href={"/routes/123/buscar"}>
            <li>[id]/buscar</li>
          </Link>
          <Link href={"/routes/params?nome=Jose&sobrenome=Junior"}>
            <li>Params</li>
          </Link>
          <Link href={"/routes/123/João"}>
            <li>[id]/[nome]</li>
          </Link>
        </ul>
      </div>
      <li style={{ fontWeight: 800, fontSize: 18, marginBottom: 25 }}>
        Navegação com router
      </li>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          height: 150,
          justifyContent: "space-around",
        }}
      >
        <button onClick={() => router.push("/routes/123/buscar")}>
          [id]/buscar
        </button>
        <button
          onClick={() =>
            navegacaoComParams("/routes/params", {
              nome: "Jose",
              sobrenome: "Junior",
            })
          }
        >
          Params
        </button>
        <button onClick={() => navegacaoSimples("/routes/123/João")}>
          [id]/[nome]
        </button>
      </div>
    </div>
  );
}

export default routes;
