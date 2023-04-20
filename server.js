const cors = require('cors');
const express = require('express');
const fs = require("fs");
const file = require('./anime.json');
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/demon-slayer", (req, res) => {
    fs.writeFile("anime.json", JSON.stringify(file), error => {
        if (error) throw 'Error: ' + error;
        res.json(file);
    });
});

app.listen(3030, () => {
    console.log("Servidor Rodando");
});