function job() {
  const prom = new Promise((resolve) => {
    setTimeout(() => {resolve('hello world')},2000);
  });
  return prom;
}
job();
