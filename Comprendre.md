# Comprendre

Essayez de synthétiser en binôme votre compréhension de la notion que vous avez vue (s'il s'agissait de plusieurs notions, vous pouvez répéter ce paragraphe plusieurs fois) : 
- Quel est son rôle ? 
  Effectuer une action qui peut prendre du temps(ex: récupérer des données d'une API) sans bloquer l'execution du reste du code.
  Attendre le résultat d'une requête, l'éxécution d'une action avant d'éxécuter une fonction.
- Quel est son intérêt ? 
  Pouvoir actualiser des données sans recharger la totalité de la page web.
  Augmenter la réactivité.
- A-t-elle des désavantages ? 
  Pour les callbacks: complexité d'imbrication (réglé en utilisant async et await) et illisibilité du code.
- Y a-t-il plusieurs façons de s'en servir ? 
  oui, il y différentes façons d'écrire du code asynchrone, chronologiquement: 
  *Callbacks: on peut utiliser des fonctions callbacks qui peuvent prendre en paramètres success et error où des fonctions qui attendent des callbacks en paramètre comme setInterval() ou setTimeout().
  *Promise: on utilise un objet promise qui peut prendre en paramètre une fonction qui peut elle-même prendre deux fonctions en paramètre(resolve et reject) pour gérer la bonne exécution du code.On peut lui appliquer les méthodes .then()(que dois-je faire quand resolve a été éxécuté) et .catch()(que dois-je faire quand reject a été éxécuté).
  .all permet d'attendre que plusieurs promises soient résolues avant de lancer une autre fonction: on lui passe un tableau en paramètre qui contient plusieurs promises et .all renvoie une promise.
  *Async et Await: on peut créer une fonction asynchrone en rajoutant async à la déclaration de la fonction, celle-ci renverra une promise et on utilise await pour attendre que cette promise soit résolue pour éxécuter le code.
- Quelles sont les étapes importantes pour la mettre en place ?
  
  async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
  myResolve(“I love You !!“);
  });
  document.getElementById(“demo”).innerHTML = await myPromise;
  }
  myDisplay();
- Quelles sont les nuances d'un langage à l'autre ? 
  vu uniquement en javascript.
- Existe-t-il des contextes (langages, environnements, outils) où elle n'existe pas ? 
  L'Asynchrone n'est pas possible dans un environnement single-thread.
- Quelles sont ses alternatives ? 
