function job(data) {
  const prom = new Promise ((resolve, reject) => {
    if (typeof(data)!=="number"){
      reject("error");
    }else{
      if (data%2 === 0){
        setTimeout(() => {reject("even")},2000);
      } else {
        setTimeout(() => { resolve("odd")}, 1000);
      }
    }
  });
  return prom;
}
job();

