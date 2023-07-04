const firstname = "Bartek";
const lastname = "Kubik";
const age = 20;

alert("JS działa");
console.log("js dziala w consoli");
console.log(firstname);
console.log(age);
console.log(`cześć nazywam sie ${firstname} i mam ${age} lat.`);

const week = document.querySelector(".pcztery");
week.innerHTML = `Witaj użytkowniku, nazywam się ${firstname} i mam ${age} lata.`;
console.log(week);

function calculate(myNumber) {
  console.log(`Dostałem ${myNumber}`);
  return myNumber * 7;
}

const myResult = calculate(age);
console.log(myResult);

function greet(age, firstname) {
  console.log(`cześć nazywam sie ${firstname} i mam ${age} lat.`);
}

greet(age, firstname);

function testOld(age, lastname) {
  console.log(`test FAT XD ${age} i ${lastname}`);
}
const test = (age, lastname) => {
  console.log(`test FAT XD ${age} i ${lastname}`);
};
test(20, `Bartek`);

console.log(typeof 2);
console.log(typeof `2`);

if (`1` != `2`) {
  console.log(`1 to 2`);
}

if (`Java` === `Javascript`) {
  console.log(`Java to Javascript`);
} else {
  console.log(`Java to nie Javascript`);
}

const myNumber = 7;

switch (myNumber) {
  case 7:
    console.log(`Jestem 7`);
    break;
  case 9:
    console.log(`jestem 9`);
    break;
  default:
    console.log(`jestem 0`);
}

const button = document.querySelector(`.action--js`);

console.log(button);

const myClick = () => {
  const heading = document.querySelector(".main__heading--js");
  heading.innerHTML = `Tekst sie zmienił`;
  heading.classList.toggle(`klasa-z-js`);
};

button.addEventListener(`click`, myClick);
