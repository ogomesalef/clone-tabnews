function status(request, response) {
  response.status(200).json({
    chave: "bora pra cima!",
  });
}

export default status;
