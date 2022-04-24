import { useRouter } from "next/router";
import Link from "next/link";

function OutraRota() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <h1>Route/id/Buscar e o id é == {id}</h1>
      <Link href={"/routes"} passHref>
        <button>Voltar</button>
      </Link>
    </div>
  );
}

export default OutraRota;
