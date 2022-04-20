import { useRouter } from "next/router";
import Link from "next/link";

function Params() {
  const router = useRouter();
  const nome = router.query.nome;
  const sobrenome = router.query.sobrenome;

  return (
    <div>
      <h1>
        O nome é {nome} e o sobrenome é {sobrenome}
      </h1>
      <Link href={"/routes"}>
        <button>Voltar</button>
      </Link>
    </div>
  );
}

export default Params;
