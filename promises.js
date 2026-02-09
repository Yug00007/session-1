const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("It worked!");
  } else {
    reject("Something went wrong");
  }
});


myPromise
  .then(result => {
    console.log(result); // "It worked!"
  })
  .catch(error => {
    console.error(error);
  });
