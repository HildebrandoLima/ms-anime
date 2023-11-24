const service = require('../../domains/services/animeService');
const baseResponse = require('../response/baseResponse');

const getAllAnime = (request, response) => {
    const ok = service.getAll();
    if (ok.length === 0) {
        return baseResponse.httpBadRequest('Persongem não encontrado', request, response);
    } else {
        return baseResponse.httpOK(ok, request, response);
    }
};

const getAnimeName = (request, response) => {
    const ok = service.getOne(request.params.name);
    if (ok.length === 0) {
        return baseResponse.httpBadRequest('Persongem não encontrado', request, response);
    } else {
        return baseResponse.httpOK(ok, request, response);
    }
};

module.exports = {
    getAllAnime,
    getAnimeName,
};
