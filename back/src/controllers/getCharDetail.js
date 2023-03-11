const axios = require("axios");


const getCharDetail = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(data => {
            const character = {
                id: data.id,
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species,
                status: data.status,
                origin: data.origin?.name
            };
            res
                .writeHead(200, { "Content-type": "application/json" })
                .end(JSON.stringify(character));
        })
        .catch((error) => res.writeHead(500, { "Content-type": "text/plainn" })
            .end(`Personaje con id ${id} no encontrado`));

}

module.exports = getCharDetail;