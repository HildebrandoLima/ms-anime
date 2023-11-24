FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install express cors

EXPOSE 3000