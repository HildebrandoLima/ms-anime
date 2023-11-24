const baseResponse = require('../http/response/baseResponse');

const handler = (app, status, error) => {
  app.use((request, response) => {
    if (status === 404) {
      return baseResponse.httpNotFound(request, response);
    }
    return baseResponse.httpInternalServerError(error, request, response);
  });
};

module.exports = handler;
