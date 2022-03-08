const http = require("http");
const host = "http://localhost";
const porta = 3001;
const stats = require("./pcRAMUsage.js");

http.createServer((req, res) => {
    let url = req.url;

    if(url === "/stats") {
        res.end(JSON.stringify(stats, null, 2))
    } else {
        res.end(`<h1>Seja bem vindo</h1>`)
    }
}).listen(porta, () => console.log(`Server funcionando - server: ${host}:${porta}, ${stats}`));