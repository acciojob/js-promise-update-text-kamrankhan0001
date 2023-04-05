//your JS code here. If required.
function sayHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}
const outputElement = document.querySelector('#output');

sayHello()
  .then((message) => {
    outputElement.textContent = message;
  })
  .catch((error) => {
    console.error(error);
  });
