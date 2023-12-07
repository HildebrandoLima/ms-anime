const baseResponse = require('../response/baseResponse');

const testGet = (request, response) => {
    try {
        const ok = [{}];
        if (ok.length === 0) {
            return baseResponse.httpBadRequest(request, response);
        } else {
            return baseResponse.httpOK(request, response);
        }
    } catch (error) {
        return baseResponse.httpInternalServerError(error.message, request, response);
    }
};

module.exports = {
    testGet,
};
