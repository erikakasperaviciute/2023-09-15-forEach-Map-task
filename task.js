// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map/forEach metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map/forEach metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
// 5. Atlikti ta patį, kaip ir ketvirtoje užduotyje, tačiau atsakymus išvesti ne į konsolę, o į ul elementus.
// 5.1. Kiekvienai užduočiai HTML faile sukurti naują ul elementą ir jam priskirti unikalų id, pvz.:
//   <ul id="task-41"></ul>
//   <ul id="task-42"></ul>
//   <ul id="task-43"></ul>
//   Ir t.t.
// 5.2. JavaScript'e paselektinti šiuos elementus.
// 5.3. Kiekvienas ketvirtos užduoties ciklo atsakymas turėtų būti įdėtas į li elementą.
// 5.4. Kiekvienas li elementas turėtų būti įdėtas į atitinkamą ul elementą.
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

let strArr = array.filter(function (str) {
  return typeof str === "string";
});

let numArr = array.filter(function (num) {
  return typeof num === "number";
});

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

// 4.1. Tik skaičius (number tipo duomenis).
// for
// for (let i = 0; i < numArr.length; i++) {
//   let num = numArr[i];
//   console.log(num);
// }

function createAnswer41(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul41.append(liElement);
}
//forEach metodas
numArr.forEach((num) => {
  createAnswer41(num);
});

// 4.2. Tik tekstą (string tipo duomenis).
// for
// for (let i = 0; i < strArr.length; i++) {
//   let str = strArr[i];
//   console.log(str);
// }

function createAnswer42(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul42.append(liElement);
}
// //forEach metodas
strArr.forEach((str) => {
  createAnswer42(str);
});

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
// for
// for (let i = 0; i < numArr.length; i++) {
//   let num = numArr[i];
//   let newNum = Math.pow(num, 4);
//   console.log(newNum);
// }

function createAnswer43(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul43.append(liElement);
}
//map metodas
numArr.map((num) => {
  let newNum = Math.pow(num, 4);
  createAnswer43(newNum);
});

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
// for
// for (let i = 0; i < numArr.length; i++) {
//   let num = numArr[i];
//   let newNum = num + 55;
//   console.log(newNum);
// }

function createAnswer44(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul44.append(liElement);
}
//map metodas
numArr.map((num) => {
  let newNum = num + 55;
  createAnswer44(newNum);
});

// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
//for
// for (let i = 0; i < numArr.length; i++) {
//   let num = numArr[i];
//   let newNum = num / 2;
//   console.log(newNum);
// }

function createAnswer45(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul45.append(liElement);
}
// //forEach metodas
numArr.forEach((num) => {
  let newNum = num / 2;
  createAnswer45(newNum);
});

// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
// for
// for (let i = 0; i < numArr.length; i++) {
//   let num = numArr[i];
//   let output = `Number: ${num}`;
//   console.log(output);
// }
function createAnswer46(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul46.append(liElement);
}
//forEach metodas
numArr.forEach((num) => {
  let output = `Number: ${num}`;
  createAnswer46(output);
});

// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
//   Ir t.t.

//for
// for (let i = 0; i < numArr.length; i++) {
//   let num = numArr[i];
//   let output = `Index: ${i}, Number: ${num}`;
//   console.log(output);
// }

function createAnswer47(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul47.append(liElement);
}

//forEach metodas
numArr.forEach((num, index) => {
  let output = `Index: ${index}, Number: ${num}`;
  createAnswer47(output);
});

// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
//for
// for (let i = 0; i < numArr.length; i++) {
//   let num = numArr[i];
//   let newNum = num * i;
//   console.log(newNum);
// }

function createAnswer48(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul48.append(liElement);
}

//forEach metodas
numArr.forEach((num, index) => {
  let newNum = num * index;
  createAnswer48(newNum);
});

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.
//for
// for (let i = 1; i < numArr.length; i++) {
//   let num = numArr[i];
//   let previousNum = numArr[i - 1];
//   let newNum = num * previousNum;
//   console.log(newNum);
// }

function createAnswer49(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul49.append(liElement);
}

//forEach metodas
numArr.forEach((num, index, numArr) => {
  if (index === 0) {
    let output = `Number ${num} has no previous number`;
    createAnswer49(output);
  } else {
    let newNum = num * numArr[index - 1];
    createAnswer49(newNum);
  }
});

// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
//for
// for (let i = 0; i < numArr.length; i++) {
//   let num = numArr[i];
//   if (num * 5 > 350) {
//     console.log(num);
//   }
// }

function createAnswer410(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul410.append(liElement);
}

//forEach metodas
numArr.forEach((num) => {
  if (num * 5 > 350) {
    createAnswer410(num);
  }
});

// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
// for
// for (let i = 0; i < strArr.length; i++) {
//   let str = strArr[i];
//   let strLength = str.length;
//   let output = `${str} has ${strLength} symbols`;
//   console.log(output);
// }

function createAnswer411(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul411.append(liElement);
}

//forEach metodas
strArr.forEach((str) => {
  let strLength = str.length;
  let output = `${str} has ${strLength} symbols`;
  createAnswer411(output);
});

// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
// for (let i = 0; i < strArr.length; i++) {
//   let str = strArr[i];
//   let output = "";
//   for (let ch = 0; ch < str.length; ch++) {
//     if (ch > 0) {
//       output += "-";
//     }
//     output += str[ch].toUpperCase();
//   }
//   console.log(output);
// }

function createAnswer412(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul412.append(liElement);
}

//forEach metodas
strArr.forEach((str) => {
  let output = "";
  str.split("").forEach((ch, index) => {
    if (index > 0) {
      output += "-";
    }
    output += ch.toUpperCase();
  });
  createAnswer412(output);
});

// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
// for
// for (let i = 0; i < strArr.length; i++) {
//   let str = strArr[i];
//   let charArray = str.split("");
//   charArray[0] = "_";
//   charArray[2] = "_";
//   string = charArray.join("");
//   console.log(string);
// }

function createAnswer413(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul413.append(liElement);
}

//map metodas
strArr.map((str) => {
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

// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
// // for
// for (let i = 0; i < strArr.length; i++) {
//   let str = strArr[i];
//   if (typeof str === "string") {
//     let charArray = str.split("");
//     let reverseArray = charArray.reverse();
//     let string = reverseArray.join("");
//     console.log(string);
//   }
// }

function createAnswer414(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul414.append(liElement);
}

//map metodas
strArr.map((str) => {
  let charArray = str.split("");
  let reverseArray = charArray.reverse();
  let string = reverseArray.join("");
  createAnswer414(string);
});

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".
// for (let i = 0; i < array.length; i++) {
//   let str = array[i];
//   if (typeof str === "string") {
//     let previousElement = i > 0 ? array[i - 1] : "no previous element";
//     let nextElement = i < array.length - 1 ? array[i + 1] : "no next element";
//     let output = `word ${str} is between ${previousElement} and ${nextElement} in the array`;
//     console.log(output);
//   }
// }

function createAnswer415(answer) {
  let liElement = document.createElement("li");
  liElement.textContent = answer;
  ul415.append(liElement);
}

//map metodas
array.map((str, i) => {
  if (typeof str === "string") {
    let previousElement = i > 0 ? array[i - 1] : "no previous element";
    let nextElement = i < array.length - 1 ? array[i + 1] : "no next element";
    let output = `word ${str} is between ${previousElement} and ${nextElement} in the array`;
    createAnswer415(output);
  }
});
