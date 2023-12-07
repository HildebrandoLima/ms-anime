## Criação de API com NodeJS.

Nela abordo um simples serviço que exibe os dados dos personagens de Demon Slayer. Tais como: nome, imagem, descricao, habilidades, técnica de respiração e arte demoníaca.</b>

Host em produção: https://api-demon-slayer-9ut6.onrender.com

<hr />

| Método |          Rota           |
|--------|-------------------------|
|   GET  |    /api/demon-slayer    |
|--------|-------------------------|
|   GET  | /api/demon-slayer/:nome |

### Requisitos:

<ul>
    <li>Ter o node instalado em sua máquina.</li>
</ul>

### Passos:

<ul>
    <li>Clone o Projeto: git@github.com:HildebrandoLima/ms-api-node-anime.git</li>
    <li>Crie arquivo package: init - [https://docs.npmjs.com/cli/v8/commands/npm-init]</li>
    <li>Instale o framework express - [https://www.npmjs.com/package/express]</li>
    <li>Liberar acesso da api com cors - [https://www.npmjs.com/package/cors]</li>
    <li>Módulo para reiniciar o servidor: nodemon - [https://www.npmjs.com/package/nodemon]</li>
    <li>Esecute sua api: npm start</li>
</ul>

## Docker

Outra opção sem precisar usar os passos acima, é executar o projeto com Docker.

## Requisitos:

<ul>
    <li>Tenha o docker instalado em sua máquina.</li>
    <li>Tenha o docker-compose instalado em sua máquina.</li>
</ul>

## Comandos Docker

<ul>
    <li>Execute o comando para, iniciar aplicação: ´sudo docker-compose up´</li>
    <li>Execute o comando para, vê o status da aplicação: ´sudo docker-compose ps´</li>
    <li>Execute o comando para, encerrar aplicação: ´sudo docker-compose down´</li>
    <li>Veja mais em: [https://docs.docker.com/get-started/overview/]</li>
</ul>

## Testes

<ul>
    <li>Instale a lib - ´npm install --save mocha chai supertest´</li>
    <li>Execute o comando: npm test</li>
</ul>