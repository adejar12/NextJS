import { useRouter } from "next/router";

function params() {
  const router = useRouter();
  const nome = router.query.nome;
  const sobrenome = router.query.sobrenome;

  return (
    <div>
      <h1>
        O nome é {nome} e o sobrenome é {sobrenome}
      </h1>
    </div>
  );
}

export default params;
