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

function generateRandomNumber(min, max) {
  const range = max - min + 1;

  return Math.floor(Math.random() * range) + min;
}

function askToUserSequenceNumbers() {
  for (let x = 0; x < 5; x++) {
    const askUser = parseInt(
      prompt("inserisci in ordine la sequenza dei numeri")
    );
    if (!simonNumber.includes(askUser)) {
      numeriErrati.push(askUser);
      console.log("i numeri errati " + numeriErrati);
      const numbersMatched = document.getElementById("not-matched");
      numbersMatched.innerText = `Non hai indovinato : ${numeriErrati}`;
    } else {
      numeriIndovinati.push(askUser);
      console.log("i numeri indovinati " + numeriIndovinati);
      const numbersMatched = document.getElementById("numbers");
      numbersMatched.innerText = `Hai indovinato : ${numeriIndovinati}`;
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

// creo array dove aggiungo 5 numeri casuali
let numeriIndovinati = [];
let numeriErrati = [];
let simonNumber = [];
let max = 5;

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

const InputUser = setTimeout(askToUserSequenceNumbers, 30000);

const timeSequence = setInterval(timeLapsNumber, 3000);
