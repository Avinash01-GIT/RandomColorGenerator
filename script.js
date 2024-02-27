let colorContainer = document.getElementById("colorDiv");

for(let i = 0; i < 42; i++){
  let colorDiv = document.createElement("div");
  colorDiv.classList.add("container");
  colorContainer.appendChild(colorDiv);
}

let allCircles = document.querySelectorAll(".container");

allCircles.forEach((div)=> {
  let color = randomColor();
  div.style.backgroundColor = color;
  div.innerText = color;
});

function randomColor() {
  let codeFigures = "0123456789abcdef";
  let hexCode = "#";
  for(let i = 0; i < 6; i++){
    let randomCode = Math.floor(Math.random() * codeFigures.length);
    hexCode += codeFigures[randomCode];
  }
  return hexCode;
}

randomColor();