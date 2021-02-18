// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// function reqListener () {
//   console.log(this.responseText);
// }
// var req = new XMLHttpRequest();
// req.responseType = 'json';
// req.open('GET', '<https://www.affirmations.dev/>', true);
// req.onload  = reqListener;
// req.send(null);


const fetch = require("node-fetch");
var resp_0 = [];
const url = 'https://www.affirmations.dev';


 async function getData(url) {
   const data = await fetch(url)
   const resp = await data.json()
   console.log(resp);
   resp_0.push(resp);

}

getData(url)
console.log(resp_0);
