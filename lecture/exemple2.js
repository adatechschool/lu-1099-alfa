const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function reqListener () {
  console.log(this.responseText);
  console.log("coucou");
}

const req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', 'https://www.affirmations.dev/', true);
req.onload = reqListener;
req.send(null);
console.log(req);