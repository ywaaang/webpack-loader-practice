import Data from "./data.txt"

console.log(Data)
console.log('hello world')
const msgElement = document.querySelector("#message");
msgElement.innerText = JSON.stringify(Data);