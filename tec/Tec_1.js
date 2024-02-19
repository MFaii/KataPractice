/* “Escribe un programa que imprima los números del 1 al 50, pero para múltiplos de 3, imprime ‘Fizz’ en lugar del número,
 y para múltiplos de 5, imprime ‘Buzz’. Para números que son múltiplos de ambos 3 y 5, imprime ‘FizzBuzz’.”

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz */

const programa = () => {
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

programa();
