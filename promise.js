// promise

// to handle async operations and avoid callback hell
// errorhandling better
// chaining promises

let myPromise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("Operation was successful");
  } else {
    reject("Operation failed");
  }
});

myPromise
  .then((msg) => {
    console.log("fulfilled:", msg); // prints "Operation was successful"
  })
  .catch((err) => {
    console.error("rejected:", err); // prints "Operation failed"
  });

//

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let userInput = "alice";
      if (userInput) {
        resolve({
          name: userInput,
          id: 1,
          customerType: "active",
        });
        reject("failed to fetch Data");
      }
    }, 5000);
  });
}

function fetchOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve([
          { id: 1, item: 'book' },
          { id: 2, item: 'pen' },
        ]);
      } else {
        reject("failed to fetch order");
      }
    }, 5000);
  });
}

fetchData()
  .then((user) => {
    console.log("Data fetched:", user);
    return fetchOrder();
  })
  .then((order) => {
    console.log("Order fetched:", order);
  })
  .catch((error) => {
    console.error("error: ", error);
  });
