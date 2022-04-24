export default function questao(req, res) {
  if (req.method === "GET") {
    get(req, res);
  } else {
    //URL existe mas o método não é permitido
    res.status(405).send("Método não permitido");
  }
}

function get(req, res) {
  //lembrando que só é possivel usar id, pq é o mesmo nome do arquivo, que nesse caso é [id]
  const id = req.query.id;
  res.status(200).json({
    id,
    enunciado: "Qual o nome da cidade que fica na região Norte do Brasil?",
    respostas: [
      "São Paulo",
      "Rio de Janeiro",
      "Belo Horizonte",
      "Brasilia",
      "Salvador",
    ],
  });
}
