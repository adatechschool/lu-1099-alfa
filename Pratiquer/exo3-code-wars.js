async function sayJoke(apiUrl, jokeId){
  const data = await fetch(apiUrl);
  const response = await data.json();
  const jokes = response.jokes
  if (jokes === undefined ){
    throw new Error("No jokes at url:"+ apiUrl);
  }
  const joke = jokes.filter(joke => joke.id === jokeId)
  const one = joke[0]
  if (joke.length < 1 ){
    throw new Error("No jokes found id:"+jokeId);
  }
  one.saySetup = function(){
    return one.setup;
  }
  one.sayPunchLine = function(){
    return one.punchLine;
  }
}