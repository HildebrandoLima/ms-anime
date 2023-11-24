const cors = require('cors');
const express = require('express');

const configureApp = (app) => {
    app.use(cors());
    app.use(express.json());
};

module.exports = configureApp;
