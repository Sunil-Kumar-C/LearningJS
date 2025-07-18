setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);


//solution to callback hell
function step(msg, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, delay);
  });
}

step("Step 1", 1000)
  .then(() => step("Step 2", 1000))
  .then(() => step("Step 3", 1000));