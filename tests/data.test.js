const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const shouldReturn = 'Deve retornar ';

describe('Data de API', () => {
  it(shouldReturn + '200 para um data válido', async () => {
    const response = await request.get('/api/demon-slayer');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('data').that.is.an('array');
    for (const anime of response.body.data) {
        expect(anime).to.have.property('anime');
        expect(anime).to.have.property('denominacao');
        expect(anime).to.have.property('genero');
        for (const protagonistas of anime.protagonistas) {
            expect(protagonistas).to.have.property('nome');
            expect(protagonistas).to.have.property('imagem');
            expect(protagonistas).to.have.property('descricao');
            expect(protagonistas).to.have.property('habilidades');
            expect(protagonistas).to.have.property('respiracao');
        }
        for (const hashiras of anime.hashiras) {
            expect(hashiras).to.have.property('nome');
            expect(hashiras).to.have.property('imagem');
            expect(hashiras).to.have.property('descricao');
            expect(hashiras).to.have.property('habilidades');
            expect(hashiras).to.have.property('respiracao');
        }
        for (const onis of anime.onis) {
            expect(onis).to.have.property('nome');
            expect(onis).to.have.property('imagem');
            expect(onis).to.have.property('descricao');
            expect(onis).to.have.property('titulo');
            expect(onis).to.have.property('arteDemoniaca');
        }
        for (const coadjuvantes of anime.coadjuvantes) {
            expect(coadjuvantes).to.have.property('nome');
            expect(coadjuvantes).to.have.property('imagem');
            expect(coadjuvantes).to.have.property('descricao');
            expect(coadjuvantes).to.have.property('habilidades');
            expect(coadjuvantes).to.have.property('respiracao');
            expect(coadjuvantes).to.have.property('arteDemoniaca');
        }
    }
  });

  it(shouldReturn + '400 para um data com erro de validação', async () => {
    const response = await request.get('/api/demon-slayer/aa');
    expect(response.status).to.equal(400);
  });

  it(shouldReturn + '404 para um data inválida', async () => {
    const response = await request.get('/api/demonslayer');
    expect(response.status).to.equal(404);
  });

  it(shouldReturn + '500 para um data com erro interno do servidor', async () => {
    const response = await request.get('/api/test');
    expect(response.status).to.equal(500);
  });
});
