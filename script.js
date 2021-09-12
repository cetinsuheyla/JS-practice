/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function sum(a = 0, b = 0) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
         <h1>The sum is : ${a + b}</h1>
     `;
  const main = document.querySelector("main");
  main.appendChild(newArticle);
}

sum(3, 7);
const math = function (x, y) {
  return x * y;
};

const showResults = function (x, y) {
  const newSection = document.createElement("section");
  newSection.innerHTML = `
        <p>The result is: ${math(x, y)}</p>
    `;
  const main = document.querySelector("main");
  main.appendChild(newSection);
};

showResults(4, 7);

const addTen = (x) => x + 10;

addTen(20);

const showTen = (x) => {
  const anotherSection = document.createElement("section");
  anotherSection.innerHTML = `
        <h2>when you add 10 to ${x}, the result is ${addTen(x)}</h2> 
    `;
  const main = document.querySelector("main");
  main.appendChild(anotherSection);
};

showTen(100);
