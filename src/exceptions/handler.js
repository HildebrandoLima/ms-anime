const handler = (app) => {
    app.use((request, response) => {
        return response.status(404).json({
          message: 'Rota não encontrada.',
          data: [],
          details: "",
          status: 404,
        });
    });
};

module.exports = handler;
