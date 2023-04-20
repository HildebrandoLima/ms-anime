FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install 

RUN npm install express

RUN npm install cors

EXPOSE 3000

CMD [ "node", "server.js" ]