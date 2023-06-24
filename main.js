let count = 0;
let countElement = document.querySelector(".count");
countElement.innerHTML = count;
function add() {
  count++;

  countElement.innerHTML = count;
}

function less() {
  count--;

  if (count < 0) {
    count = 0;
  }

  countElement.innerHTML = count;
}

function reset() {
  count = 0;

  countElement.innerHTML = count;
}
