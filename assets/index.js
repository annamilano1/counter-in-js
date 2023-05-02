const createElementHtml = (tag, id, content) => {
  const elem = document.createElement(tag);
  elem.id = id;
  elem.innerHTML = content;
  return elem;
};

/*contenitore generale*/
const div = createElementHtml("div", "box", "");
document.body.appendChild(div);

let numbers = createElementHtml("span", "numbers", "0");
div.appendChild(numbers);
//contenitore bottoni
const divButtons = createElementHtml("div", "div-buttons", "");
div.appendChild(divButtons);
const minus = createElementHtml("button", "minus", "-");
divButtons.appendChild(minus);

const plus = createElementHtml("button", "plus", "+");
divButtons.appendChild(plus);

const reset = createElementHtml("button", "reset", "reset");
divButtons.appendChild(reset);

let integer = 0;

divButtons.addEventListener("click", (e) => {
  const target = e.target.id;

  switch (target) {
    case "plus":
      integer++;
      break;
    case "minus":
      integer--;
      break;
    case "reset":
      integer = 0;
      break;
  }
  numbers.innerHTML = integer;
});
