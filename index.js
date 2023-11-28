const gridDiv = document.querySelector(".grid-container");
const gridItem = document.querySelector(".item");
const textDiv = document.querySelector(".text-div");
const textNode = document.querySelector(".text");
const extraDiv = document.querySelectorAll(".extra");
const img1 = gridDiv.children[1];
const img2 = gridDiv.children[2];

img1.classList.add("move-right");
img2.classList.add("move-left");
setTimeout(() => {
  img1.classList.remove("move-right");
  img2.classList.remove("move-left");
  img2.remove();
  gridDiv.insertBefore(img2, gridDiv.children[1]);
}, 1500);

setInterval(() => {
  let img1 = gridDiv.children[1];
  let img2 = gridDiv.children[2];
  img1.classList.add("move-right");
  img2.classList.add("move-left");
  setTimeout(() => {
    img1.classList.remove("move-right");
    img2.classList.remove("move-left");
    img2.remove();
    gridDiv.insertBefore(img2, gridDiv.children[1]);
  }, 1500);
}, 1500);

function handleResize() {
  //   const windowWidth = window.innerWidth - 128;
  //   const numOfCol = Math.round(windowWidth / 100);

  const textHeight = textNode.offsetHeight;
  const gridWidth = textNode.offsetWidth;
  const itemHeight = gridItem.offsetHeight;

  //   64 --> padding (4rem)
  if (Math.abs(textHeight + 64 - itemHeight) > 0.5) {
    let numOfRow = Math.ceil((textHeight + 64) / itemHeight);
    numOfRow += 2;
    let gridRow = "";
    let gridCol = "";

    for (let i = 0; i < numOfRow; i++) gridRow += " 1fr";
    //  updating Row
    gridDiv.style.gridTemplateRows = gridRow;
    textDiv.style.gridRow = `2 / ${numOfRow} `;

    // updation Column
    if (gridWidth <= 350) {
      for (let i = 0; i < 8; i++) gridCol += " minmax(10px, 1fr)";

      gridDiv.style.gridTemplateColumns = gridCol;
      textDiv.style.gridColumn = `2 / 8`;

      if (numOfRow === 5) {
        extraDiv[0].style.display = "none";
        extraDiv[1].style.display = "none";
      } else {
        extraDiv[0].style.display = "flex";
        extraDiv[1].style.display = "flex";
      }
    } else if (gridWidth > 350 && gridWidth < 686) {
      for (let i = 0; i < 9; i++) gridCol += " minmax(50px, 1fr)";

      gridDiv.style.gridTemplateColumns = gridCol;
      textDiv.style.gridColumn = `2 / 9`;

      if (numOfRow === 5) {
        extraDiv[0].style.display = "flex";
        extraDiv[1].style.display = "flex";
      } else {
        extraDiv[0].style.display = "none";
        extraDiv[1].style.display = "none";
      }
    } else {
      for (let i = 0; i < 10; i++) gridCol += " minmax(50px, 1fr)";

      gridDiv.style.gridTemplateColumns = gridCol;
      textDiv.style.gridColumn = `2 / 10`;

      if (numOfRow == 4) {
        extraDiv[0].style.display = "flex";
        extraDiv[1].style.display = "flex";
      } else {
        extraDiv[0].style.display = "none";
        extraDiv[1].style.display = "none";
      }
    }
    // console.log(Math.abs(textHeight + 64 - itemHeight));
  }

  // console.log("th " + parseInt(textHeight + 64));
  // console.log("gh " + itemHeight);
}
