//BÀI 1
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(alert('Promise is da best'));
  }, 5000);
  console.log(resolve);
})
  

  // reject(new Error("Whoops!")), 5000);
  // // reject runs the second function in .then
  // promise.then(
  //   result => alert(result), // doesn't run
  //   error => alert(error) // shows "Error: Whoops!" after 1 second
  // );

  // // 