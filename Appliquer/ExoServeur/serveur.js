const http = require('http');
//const fs = require('fs');
const fetch = require('node-fetch');
//const https = require('https');

const server = http.createServer()
const url = 'https://www.affirmations.dev/';

server.on('request', async function (req,res) {
    const data = await getData(url);
    res.setHeader('Content-type', 'text/html');
    res.end(data);
})

async function getData(url){
  let data = await fetch(url)
  let response = await data.json()
  return response.affirmation
}

server.listen(8080);

// https.get('https://www.affirmations.dev/', (resp) => {
//   let data = '';
//
//   // A chunk of data has been received.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });
//
//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log("coucou")
//     console.log(JSON.parse(data));
//   });
//
// })

// fs.readFile('index.html', (err,data) => {
//   if (err) {
//     res.statusCode = 404
//     res.end("Erreur le fichier n'existe pas")
//   } else {
//   res.end(data)
