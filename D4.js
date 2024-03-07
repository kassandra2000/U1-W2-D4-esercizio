/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  let rectangleArea = l1 * l2;
  return rectangleArea;
};

console.log("l'area del rettangolo è ", area(2, 3));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (num1, num2) {
  if (num1 !== num2) {
    let sum = num1 + num2;
    return sum;
  } else {
    let sum = num1 * num2;
    return sum;
  }
};

console.log(
  "i due numeri sono diversi tra loro e la loro somma fa",
  crazySum(2, 5)
);
console.log(
  "i due numeri sono uguali tra loro e la loro moltiplicazione fa",
  crazySum(5, 5)
);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (num1) {
  if (num1 <= 19) {
    return Math.abs(num1 - 19);
  } else {
    return num1 * 3;
  }
};

console.log("la differenza tra num1 e 19 e:", crazyDiff(3));
console.log("la differenza tra num1 e 19 e:", crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(40));
console.log(boundary(400));
console.log(boundary(4000));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (string) {
  if (string.search(/EPICODE/i) === -1) {
    epicodeString = "EPICODE " + string;
    return epicodeString;
  } else {
    return string;
  }
};

console.log(epify("è un ottima scuola di programmazione"));
console.log(epify("epicode è un ottima scuola di programmazione"));
console.log(epify("Epicode è un ottima scuola di programmazione"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (num1) {
  let M7 = num1 % 7;
  let M3 = num1 % 3;
  if (num1 > 0 && M3 === 0) {
    return "è un numero positivo e " + num1 + " è multiplo di 3";
  } else if (num1 > 0 && M7 === 0) {
    return "è un numero positivo e " + num1 + " è multiplo di 7";
  } else if (num1 === 0) {
    return "il numero è " + num1;
  } else if (num1 < 0) {
    return num1 + " è un numero negativo ";
  } else {
    return (
      "è un numero positivo ma " + num1 + " non è multiplo nè di 7, nè di 3"
    );
  }
};
console.log(check3and7(6));
console.log(check3and7(14));
console.log(check3and7(0));
console.log(check3and7(-10));
console.log(check3and7(5));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function (string) {
  const newString = string.split("").reverse().join("");

  return newString;
};

console.log(reverseString("ciao sono"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (string) {
  const upperString = string.split(" ");

  for (let i = 0; i < upperString.length; i++) {
    upperString[i] =
      upperString[i].charAt(0).toUpperCase() + upperString[i].substring(1);
  }
  return upperString.join(" ");
};

console.log(upperFirst("io sono kassandra"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (string) {
  const firstCh = string.slice(0, -1).slice(1, -1);
  return firstCh;
};

console.log(cutString("ciao sono una frase"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  
  const arreyRandom = [];

  for (let i = 0; i < n; i++) {
    const numberRandom = Math.floor(Math.random() * 11);
    arreyRandom.push(numberRandom); 
  }
  return arreyRandom;
};

console.log(giveMeRandom(3));
