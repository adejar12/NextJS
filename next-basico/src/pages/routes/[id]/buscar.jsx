import { useRouter } from "next/router";

function outraRota() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <h1>Route/id/Buscar e o id é == {id}</h1>
    </div>
  );
}

export default outraRota;
