const service = require('../../domains/services/animeService');

const getAllAnime = (request, response) => {
    const ok = service.getAll();
    if (ok.length === 0) {
        return response.status(404).json({
            message: 'Registro não enconrado.',
            data: [],
            details: "",
            status: 404,
        });
    } else {
        return response.status(200).json({
            message: 'Listagem realizada com sucesso.',
            data: ok,
            details: "",
            status: 200,
        });
    }
};

const getAnimeName = (request, response) => {
    const ok = service.getOne(request.params.name);
    if (ok.length === 0) {
        return response.status(404).json({
            message: 'Registro não enconrado.',
            data: [],
            details: "",
            status: 404,
        });
    } else {
        return response.status(200).json({
            message: 'Listagem realizada com sucesso.',
            data: ok,
            details: "",
            status: 200,
        });
    }
};

module.exports = {
    getAllAnime,
    getAnimeName,
};
