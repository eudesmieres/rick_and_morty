const http = require("http");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");
const PORT = 3001;

http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); //cualquiere puede hacer peticiones
        const id = req.url.split("/").pop();

        if (req.url.includes("onsearch")) {
            getCharById(res, id);
        }
        if (req.url.includes("detail")) {
            getCharDetail(res, id);
        }

    }).listen(PORT, "localhost");
