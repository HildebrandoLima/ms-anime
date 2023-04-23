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

        return res.status(200).json({
            message: "Listagem de personagens encontrada com sucesso.",
            data: file,
            datails: "",
            staus: 200
        });
    });
});

app.get("/api/demon-slayer/:nome", (req, res) => {
    fs.writeFile("anime.json", JSON.stringify(file), error => {
        if (error) throw 'Error: ' + error;

        const arrayPersonagens = file.protagonistas.concat(file.hashiras).concat(file.onis).concat(file.coadjuvantes);

        arrayPersonagens.forEach(element => {
            if (element.nome == req.params.nome) {
                return res.status(200).json({
                    message: "Listagem de personagem encontrada com sucesso.",
                    data: element,
                    datails: "",
                    staus: 200
                });
            }
        });
    });
});

app.listen(3030, () => {
    console.log("Servidor Rodando");
});