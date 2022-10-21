async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("I love You !!");
    });
    let answer = await myPromise;
    console.log(answer);
    console.log(1);
  }
  
  myDisplay();