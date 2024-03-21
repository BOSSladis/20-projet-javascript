const formColor = document.querySelector("#color");
const groupColor1 = document.querySelector("#group-color-1");
const labelColor1 = document.querySelector("#group-color__label-1");
const inputColor1 = document.querySelector("#group-color__input-1");
const groupColor2 = document.querySelector("#group-color-2");
const labelColor2 = document.querySelector("#group-color__label-2");
const inputColor2 = document.querySelector("#group-color__input-2");
const labelOrientation = document.querySelector("#group-silder__label");
const valueOrientation = document.querySelector("#group-silder__label__value");
const inputOrientation = document.querySelector("#group-silder__slider");

const btnRandom = document.querySelector("#btn-random");
const btnCopy = document.querySelector("#btn-copy");

const snackbar = document.querySelector("#snackbar");
const snackbarCode = document.querySelector("#snackbar__content__code");
const snackbarBtnCopy = document.querySelector("#snackbar__buttons__copy");
const snackbarBtnClose = document.querySelector("#snackbar__content__close");

formColor.addEventListener("submit", (event) => {
  event.preventDefault();
});

inputColor1.addEventListener("input", (event) => {
  const inputValue = inputColor1.value;
  labelColor1.innerHTML = inputValue;
  labelColor1.style.color = getContrastYIQ(inputValue);
  groupColor1.style.backgroundColor = inputValue;

  changeBackgroundRadient();
});

inputColor2.addEventListener("input", (event) => {
  const inputValue = inputColor2.value;
  labelColor2.innerHTML = inputValue;
  labelColor2.style.color = getContrastYIQ(inputValue);
  groupColor2.style.backgroundColor = inputValue;

  changeBackgroundRadient();
});

inputOrientation.addEventListener("input", (event) => {
  valueOrientation.innerHTML = inputOrientation.value;

  changeBackgroundRadient();
});

btnRandom.addEventListener("click", generateRandomGradient);

btnCopy.addEventListener("click", copyTheGradient);

snackbarBtnClose.addEventListener("click", closeSnackBar);

function generateRandomGradient(event) {
  inputColor1.value = generateHex();
  inputColor1.dispatchEvent(new Event("input"));

  inputColor2.value = generateHex();
  inputColor2.dispatchEvent(new Event("input"));

  inputOrientation.value = Math.floor(Math.random() * 360);
  inputOrientation.dispatchEvent(new Event("input"));

  changeBackgroundRadient();
}

function generateHex() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += Math.floor(Math.random() * 16).toString(16);
  }
  return hex;
}

function getContrastYIQ(hexcolor) {
  hexcolor = hexcolor.slice(-6);
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}

function changeBackgroundRadient() {
  document.body.style.background = `linear-gradient(${inputOrientation.value}deg, ${inputColor1.value}, ${inputColor2.value})`;
}

function copyTheGradient(event) {
  snackbarCode.innerHTML = `background-color: linear-gradient(${inputOrientation.value}deg, ${inputColor1.value}, ${inputColor2.value});`;
  openSnackBar();
}

function openSnackBar() {
  snackbar.setAttribute("data-state", "open");
  setTimeout(() => {
    closeSnackBar();
  }, 2000);
}

function closeSnackBar() {
  console.log("retfgergtycxAZEFRGTY");
  snackbar.setAttribute("data-state", "close");
}

function realyCopyCode() {}
