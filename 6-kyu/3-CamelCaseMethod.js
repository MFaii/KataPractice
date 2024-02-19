/* Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord" */

function toCamelCase(input) {
  return input
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    .join("");
}

console.log(toCamelCase("hello case")); // Output: "HelloCase"
console.log(toCamelCase("camel case word")); // Output: "CamelCaseWord"
