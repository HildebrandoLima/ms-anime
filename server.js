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
        return res.json(file);
    });
});

app.get("/api/demon-slayer/:nome", (req, res) => {
    fs.writeFile("anime.json", JSON.stringify(file), error => {
        if (error) throw 'Error: ' + error;
        file.protagonistas.forEach(element => {
            if (element.nome == req.params.nome) {
                return res.json(element);
            }
        });

        file.hashiras.forEach(element => {
            if (element.nome == req.params.nome) {
                return res.json(element);
            }
        });

        file.onis.forEach(element => {
            if (element.nome == req.params.nome) {
                return res.json(element);
            }
        });

        file.coadjuvantes.forEach(element => {
            if (element.nome == req.params.nome) {
                return res.json(element);
            }
        });
    });
});

app.listen(3030, () => {
    console.log("Servidor Rodando");
});