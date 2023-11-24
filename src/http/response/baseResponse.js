const httpOK = (ok, request, response) => {
  return response.status(200).json({
    message: 'Listagem realizada com sucesso.',
      data: ok,
      details: "",
      status: 200,
  });
};

const httpBadRequest = (message, request, response) => {
  return response.status(400).json({
    message: message,
    data: [],
    details: "",
    status: 400,
  });
};

const httpNotFound = (request, response) => {
  return response.status(404).json({
    message: 'Rota não enconrada.',
    data: [],
    details: "",
    status: 404,
  });
};

const httpInternalServerError = (error, request, response) => {
  return response.status(500).json({
    message: 'Error interno do servidor.',
    data: [],
    details: error,
    status: 500,
  });
};

module.exports = {
  httpOK,
  httpBadRequest,
  httpNotFound,
  httpInternalServerError,
};
