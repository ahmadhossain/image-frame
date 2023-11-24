// function handleResize() {
//   const windowWidth = window.innerWidth - 128;

//   const div = document.querySelector(".grid-container");
//   // console.log(windowWidth);

//   const numOfCol = Math.round(windowWidth / 100);
//   let gridCol = "";
//   for (let i = 0; i < numOfCol; i++) {
//     gridCol += " auto";
//   }
//   // console.log(numOfCol);

//   const txtNode = document.querySelector("#text");
//   const offsetHeight = txtNode.offsetHeight;

//   let numOfRow = Math.ceil(offsetHeight / 100);
//   numOfRow += 2;
//   let gridRow = "";
//   console.log("offsetHeight: " + txtNode.offsetHeight);
//   console.log("numOfRow: " + numOfRow);

//   for (let i = 0; i < numOfRow; i++) {
//     gridRow += " 1fr";
//   }

//   div.style.display = "grid";
//   // div.style.gridTemplateColumns = gridCol;
//   div.style.gridTemplateRows = gridRow;
//   div.style.gap = "10px";
//   div.style.padding = "1px";
//   div.style.backgroundColor = "#2196f3";

//   console.log("numOfRow" + gridRow);
// }

const txtNode = document.querySelector(".text");
console.log(txtNode.offsetWidth);
