const express = require('express');
const configureApp = require('./src/infra/config/config');
const handler = require('./src/exceptions/handler');
const routes = require('./src/routes/routes');

const app = express();
const port = 3000;

configureApp(app);

app.use('/api', routes);

handler(app);

app.listen(port, () => {
    console.log(`Servidor Rodando... http://localhost:${port}`);
});
