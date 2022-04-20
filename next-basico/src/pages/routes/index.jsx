import Link from "next/link";

function routes() {
  return (
    <div>
      <h1>Rotas</h1>
      <ul>
        <Link href={"/routes/params?nome=Jose&sobrenome=Junior"}>
          <li>Params</li>
        </Link>
        <Link href={"/routes/123/buscar"}>
          <li>[id]/buscar</li>
        </Link>
        <Link href={"/routes/123/João"}>
          <li>[id]/[nome]</li>
        </Link>
      </ul>
    </div>
  );
}

export default routes;
