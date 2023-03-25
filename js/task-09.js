const refs = {
  body: document.querySelector("body"),
  colorValue: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};

const { body, colorValue, changeColorBtn } = refs;

changeColorBtn.addEventListener("click", changeColorBtnClickHandler);

function changeColorBtnClickHandler() {
  let currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  colorValue.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
