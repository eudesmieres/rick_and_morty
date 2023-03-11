const http = require("http");
const characters = require("./utils/data");
const PORT = 3001;

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*'); //cualquiere puede hacer peticiones
    if (request.url.includes("rickandmorty/character")) {
        console.log(request.url.split("/"));
        const id = request.url.split("/").pop();

        const character = characters.filter(char => char.
            id === Number(id));

        response
            .writeHead(200, { "Content-type": "application-json" })
            .end(JSON.stringify(character[0]));
    }
}).listen(PORT, "localhost");
