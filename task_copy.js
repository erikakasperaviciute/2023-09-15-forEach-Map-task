// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
// 6. Visoms prieš tai atliktoms užduotims sukurti funkcijas. Jeigu tą pačia funkciją galima panaudoti keletui užduočių - taip ir padaryti.
// 6.1. Funkcija privalo priimti bent vieną parametrą, t.y. masyvą, su kuriuo dirbama.
// 6.2. Jeigu įmanoma ir logiška, pridėti ir daugiau parametrų.
let array = [
  "start",
  2,
  3,
  5,
  11,
  155,
  888,
  "15x",
  6789,
  -5564,
  "obuolys",
  -51,
  55,
  0,
  33,
  789,
  6543,
  1,
  "trylika",
  444,
  321,
  654,
  -1,
  987,
  -333,
  -321,
  "end",
];

console.log(array);

let ul41 = document.querySelector("#task-41");
let ul42 = document.querySelector("#task-42");
let ul43 = document.querySelector("#task-43");
let ul44 = document.querySelector("#task-44");
let ul45 = document.querySelector("#task-45");
let ul46 = document.querySelector("#task-46");
let ul47 = document.querySelector("#task-47");
let ul48 = document.querySelector("#task-48");
let ul49 = document.querySelector("#task-49");
let ul410 = document.querySelector("#task-410");
let ul411 = document.querySelector("#task-411");
let ul412 = document.querySelector("#task-412");
let ul413 = document.querySelector("#task-413");
let ul414 = document.querySelector("#task-414");
let ul415 = document.querySelector("#task-415");

function getStrArr(array) {
  let strArr = array.filter(function (str) {
    return typeof str === "string";
  });
  return strArr;
}

function getNumArr(array) {
  let numArr = array.filter(function (num) {
    return typeof num === "number";
  });
  return numArr;
}

// 4.1. Tik skaičius (number tipo duomenis).

function createAnswer41(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul41.append(liElement);
}

function task41(array) {
  let numberArr = getNumArr(array);
  numberArr.map((num) => {
    createAnswer41(num);
  });
}
task41(array);

// 4.2. Tik tekstą (string tipo duomenis).

function createAnswer42(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul42.append(liElement);
}

function task42(array) {
  let stringArr = getStrArr(array);
  stringArr.forEach((str) => {
    createAnswer42(str);
  });
}
task42(array);

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.

function createAnswer43(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul43.append(liElement);
}

function task43(array, powNum) {
  let numberArr = getNumArr(array);
  numberArr.forEach((num) => {
    let newNum = Math.pow(num, powNum);
    createAnswer43(newNum);
  });
}
task43(array, 4);

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.

function createAnswer44(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul44.append(liElement);
}
function task44(array, plusNum) {
  let numberArr = getNumArr(array);
  numberArr.map((num) => {
    let newNum = num + plusNum;
    createAnswer44(newNum);
  });
}
task44(array, 55);

// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.

function createAnswer45(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul45.append(liElement);
}
function task45(array, divisor) {
  let numberArr = getNumArr(array);
  numberArr.forEach((num) => {
    let newNum = num / divisor;
    createAnswer45(newNum);
  });
}
task45(array, 2);

// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".

function createAnswer46(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul46.append(liElement);
}
function task46(array) {
  let numberArr = getNumArr(array);
  numberArr.forEach((num) => {
    let output = `Number: ${num}`;
    createAnswer46(output);
  });
}
task46(array);

// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.

function createAnswer47(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul47.append(liElement);
}

function task47(array) {
  let numberArr = getNumArr(array);
  numberArr.forEach((num, index) => {
    let output = `Index: ${index}, Number: ${num}`;
    createAnswer47(output);
  });
}
task47(array);

// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.

function createAnswer48(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul48.append(liElement);
}

function task48(array) {
  let numberArr = getNumArr(array);
  numberArr.forEach((num, index) => {
    let newNum = num * index;
    createAnswer48(newNum);
  });
}
task48(array);

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.

function createAnswer49(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul49.append(liElement);
}

function task49(array) {
  let numberArr = getNumArr(array);
  numberArr.forEach((num, index, numArr) => {
    if (index === 0) {
      let output = `Number ${num} has no previous number`;
      createAnswer49(output);
    } else {
      let newNum = num * numArr[index - 1];
      createAnswer49(newNum);
    }
  });
}
task49(array);

// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.

function createAnswer410(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul410.append(liElement);
}

function task410(array, multiple, conditionNum) {
  let numberArr = getNumArr(array);
  numberArr.forEach((num) => {
    if (num * multiple > conditionNum) {
      createAnswer410(num);
    }
  });
}
task410(array, 5, 350);

// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".

function createAnswer411(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul411.append(liElement);
}
function task411(array) {
  let stringArr = getStrArr(array);
  stringArr.forEach((str) => {
    let strLength = str.length;
    let output = `${str} has ${strLength} symbols`;
    createAnswer411(output);
  });
}
task411(array);

// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".

function createAnswer412(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul412.append(liElement);
}

function task412(array) {
  let stringArr = getStrArr(array);
  stringArr.forEach((str) => {
    let output = "";
    str.split("").forEach((ch, index) => {
      if (index > 0) {
        output += "-";
      }
      output += ch.toUpperCase();
    });
    createAnswer412(output);
  });
}
task412(array);

// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";

function createAnswer413(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul413.append(liElement);
}

function task413(array) {
  let stringArr = getStrArr(array);
  stringArr.map((str) => {
    charArray = str.split("");
    charArray = charArray.map((char, index) => {
      if (index === 0 || index === 2) {
        char = "_";
      }
      return char;
    });
    let string = charArray.join("");
    createAnswer413(string);
  });
}
task413(array);

// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";

function createAnswer414(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul414.append(liElement);
}

function task414(array) {
  let stringArr = getStrArr(array);
  stringArr.map((str) => {
    let charArray = str.split("");
    let reverseArray = charArray.reverse();
    let string = reverseArray.join("");
    createAnswer414(string);
  });
}
task414(array);

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".

function createAnswer415(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul415.append(liElement);
}
function task415(array) {
  array.map((str, i) => {
    if (typeof str === "string") {
      let previousElement = i > 0 ? array[i - 1] : "no previous element";
      let nextElement = i < array.length - 1 ? array[i + 1] : "no next element";
      let output = `word ${str} is between ${previousElement} and ${nextElement} in the array`;
      createAnswer415(output);
    }
  });
}
task415(array);
