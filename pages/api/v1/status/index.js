function status(request, response) {
  response.status(200).json({
    chave: "Aluno brabo é só aqui",
  });
}

export default status;

//Response = Local    -> Exterior
//Request =  Exterior -> Local
