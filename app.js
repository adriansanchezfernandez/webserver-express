const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-type': 'application/json' })
        let salida = {
            nombre: 'Adrian',
            edad: 30,
            url: req.url
        }
        res.write(JSON.stringify(salida))
        res.end();
    })
    .listen(8080);

console.log('escuchando el puerto 8080, http://localhost:8080')