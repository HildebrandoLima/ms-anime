## Criação de API com NodeJS.

Nela abordo um simples serviço que exibe os dados dos personagens de Demon Slayer. Tais como: nome, imagem, descricao, habilidades, técnica de respiração e arte demoníaca.</b>

<hr />

| Método |          Rota           |
|--------|-------------------------|
|   GET  |    /api/demon-slayer    |
|--------|-------------------------|
|   GET  | /api/demon-slayer/:nome |

### Requisitos:

<li>Ter o node instalado em sua máquina.</li> 

### Passos:

<li>Clone o Projeto: git@github.com:HildebrandoLima/ms-api-node-anime.git</li>
<li>Crie arquivo package: init - [https://docs.npmjs.com/cli/v8/commands/npm-init]</li>
<li>Instale o framework express - [https://www.npmjs.com/package/express]</li>
<li>Liberar acesso da api com cors - [https://www.npmjs.com/package/cors]</li>
<li>Módulo para reiniciar o servidor: nodemon - [https://www.npmjs.com/package/nodemon]</li>
<li>Esecute sua api: npm start</li>

## Docker

Outra opção sem precisar usar os passos acima, é executar o projeto com Docker.

## Requisitos:
<li>Tenha o docker instalado em sua máquina.</li>
<li>Tenha o docker-compose instalado em sua máquina.</li>
<li>Execute o comando: ´sudo docker-compose up´</li>
<li>Veja o host liberado: ´sudo docker-compose ps´</li>
<li>Encerre aplicação: ´sudo docker-compose down´</li>
<li>Veja mais em: [https://docs.docker.com/get-started/overview/]</li>
