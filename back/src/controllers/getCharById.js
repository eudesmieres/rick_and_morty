const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
    const { id } = req.params;
    axios(URL + id).then(
        (response) => {
            const character = {
                id: response.data.id,
                image: response.data.image,
                name: response.data.name,
                gender: response.data.gender,
                species: response.data.species,
            };
            res.status(200).json(character);
        },
        (error) => res.status(500).json(error.message)
    );
}

module.exports = { getCharById };













// const axios = require("axios");


// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => response.data)
//         .then(data => {
//             const character = {
//                 id: data.id,
//                 image: data.image,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species
//             };
//             res
//                 .writeHead(200, { "Content-type": "application/json" })
//                 .end(JSON.stringify(character));
//         })
//         .catch((error) => res.writeHead(500, { "Content-type": "text/plainn" })
//             .end(`Personaje con id ${id} no encontrado`));

// }

// module.exports = getCharById;