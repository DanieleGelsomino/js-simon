// console check
console.log("JS OK!");

/*
    Descrizione:
    Visualizzare in pagina 5 numeri casuali.
    Da lì parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta,
    i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri
    da indovinare sono stati individuati.
*/

//******* FUNZIONI *******//
function generateRandomNumber(min, max) {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}

function askToUserSequenceNumbers() {
  for (let x = 0; x < 5; x++) {
    const askUser = parseInt(
      prompt("inserisci in ordine la sequenza dei numeri")
    );
    /*
     se i numeri inseriti non sono inclusi nell'array,
     li aggiungerà nei numeri errati
     altrimenti nei numeri indovinati
     */
    if (!simonNumber.includes(askUser)) {
      numeriErrati.push(askUser);
      console.log("i numeri errati " + numeriErrati);
    } else {
      numeriIndovinati.push(askUser);
      console.log("i numeri indovinati " + numeriIndovinati);
      const numbersMatched = document.getElementById("numbers");
      numbersMatched.innerText = `Hai indovinato : 
      ${numeriIndovinati.join("-")}`;
    }
    if (numeriIndovinati.length < 5 && numeriIndovinati.length > 0) {
      const totNumbersMatched = document.getElementById("tot-numbers");
      totNumbersMatched.innerText = `Hai indovinato : ${numeriIndovinati.length} numeri`;
    }
    if (numeriErrati.length <= 5) {
      const totWrongNumbers = document.getElementById("wrong-numbers");
      totWrongNumbers.innerText = `Non hai indovinato : ${numeriErrati.length} numeri`;
    }
  }
}

function timeLapsNumber() {
  max--;
  const container = document.getElementById("numbers");
  if (max < 0) {
    clearInterval(timeSequence); // cancello il setInterval
    container.innerText = "Tocca a te!";
  } else {
    container.innerText = simonNumber[max];
  }
}
//******* / FUNZIONI *******//

//******* VARIABILI *******/

let numeriIndovinati = [];
let numeriErrati = [];
let simonNumber = [];
let max = 5;
let timeSequence;
let InputUser;
const startGame = document.getElementById("start");

//******* / VARIABILI *******/

//******* EVENTO AL CLICK *******//
startGame.addEventListener("click", function () {
  //******* CICLI *******/
  while (simonNumber.length < 5) {
    number = generateRandomNumber(1, 100);
    if (!simonNumber.includes(number)) {
      simonNumber.push(number);
    }
  }

  console.log(simonNumber);

  for (let i = 0; i < simonNumber.length; i++) {
    const container = document.getElementById("numbers");
    container.innerText = simonNumber[i];
  }

  InputUser = setTimeout(askToUserSequenceNumbers, 20000);
  timeSequence = setInterval(timeLapsNumber, 3000);
  //******* / CICLI *******/
});
