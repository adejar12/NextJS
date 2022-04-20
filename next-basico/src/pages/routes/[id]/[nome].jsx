import { useRouter } from "next/router";

function nome() {
  const router = useRouter();
  const id = router.query.id;
  const nome = router.query.nome;

  return (
    <div>
      <h1>
        Route/id/[nome] e o id é == {id} e o nome é == {nome}
      </h1>
    </div>
  );
}

export default nome;
