const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const shouldReturn = 'Deve retornar ';

describe('Rotas de API', () => {
  it(shouldReturn + '200 para uma rota válida', async () => {
    const response = await request.get('/api/demon-slayer');
    expect(response.status).to.equal(200);
  });

  it(shouldReturn + '400 para uma rota com erro de validação', async () => {
    const response = await request.get('/api/demon-slayer/aa');
    expect(response.status).to.equal(400);
  });

  it(shouldReturn + '404 para uma rota inválida', async () => {
    const response = await request.get('/api/demonslayer');
    expect(response.status).to.equal(404);
  });

  it(shouldReturn + '500 para uma rota com erro interno do servidor', async () => {
    const response = await request.get('/api/test');
    expect(response.status).to.equal(500);
  });
});
