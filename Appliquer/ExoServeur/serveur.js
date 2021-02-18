const http = require('http');
const fs = require('fs');

const server = http.createServer()

server.on('request', (req,res) => {
  fs.readFile('index.html', (err,data) => {
    if (err) {
      res.writeHead(404)
      res.end("Erreur le fichier n'existe pas")
    } else {
    res.writeHead(200, {
      'Content-type': 'text/html; charset=utf-8'
    })
    res.end(data)
  }
  })
})

server.listen(8080);
