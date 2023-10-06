/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

function solution(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === char.toUpperCase()) {
      result = result + " " + char;
    } else {
      result = result + char;
    }
  }
  return result;
}

console.log(solution("camelCasing"));
console.log(solution("identifier"));
console.log(solution(""));
