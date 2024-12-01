const body = document.body;

const div = document.createElement("div");
const input = document.createElement("input");

//append element

body.appendChild(div);
body.appendChild(input);

input.addEventListener("change", function (event) {
  div.innerHTML += event.target.value;
});
