import { useRouter } from "next/router";
import Link from "next/link";

function Nome() {
  const router = useRouter();
  const id = router.query.id;
  const nome = router.query.nome;

  return (
    <div>
      <h1>
        Route/id/[nome] e o id é == {id} e o nome é == {nome}
      </h1>
      <Link href={"/routes"} passHref>
        <button>Voltar</button>
      </Link>
    </div>
  );
}

export default Nome;
