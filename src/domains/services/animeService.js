const fs = require('fs');

const dataPath = () => {
    return JSON.parse(fs.readFileSync('./src/infra/db/anime.json'));
};

const getAll = () => {
    const data = dataPath();
    return data || [];
};

const getOne = (name) => {
    const data = dataPath();

    const characters = [
        ...(data[0]?.protagonistas || []),
        ...(data[0]?.hashiras || []),
        ...(data[0]?.onis || []),
        ...(data[0]?.coadjuvantes || []),
    ];
    const foundCharacter = characters.filter((character) => character.nome === name);
    return foundCharacter || [];
};

module.exports = {
    getAll,
    getOne,
};
