const gridDiv = document.querySelector(".grid-container");
const gridItem = document.querySelector(".item");
const textDiv = document.querySelector(".text-div");
const textNode = document.querySelector(".text");
const extraDiv = document.querySelectorAll(".extra");

adjustRowColumn();
imgSwapAnimation();

setInterval(() => {
  imgSwapAnimation();
}, 3500);

function handleResize() {
  adjustRowColumn();
}

function adjustRowColumn() {
  const textHeight = textNode.offsetHeight;
  const itemHeight = gridItem.offsetHeight;
  const gridWidth = textNode.offsetWidth;
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
  }

  // changing the image position to move
  var root = document.querySelector(":root");
  root.style.setProperty("--x", itemHeight + "px");
  root.style.setProperty("--y", itemHeight + "px");
}

function imgSwapAnimation() {
  const textHeight = textNode.offsetHeight;
  const itemHeight = gridItem.offsetHeight;
  const gridWidth = textNode.offsetWidth;

  const i = Math.floor(1 + Math.random() * 21);
  // const i = 10;
  console.log(i, "random number");

  let r, c;
  if (gridWidth <= 350) {
    c = 8;
  } else if (gridWidth > 350 && gridWidth < 686) {
    c = 9;
  } else {
    c = 10;
  }

  r = Math.ceil((textHeight + 64) / itemHeight);
  let mn = c;
  let mx = c + 2 * r;
  let last = mx + c;

  const img1 = gridDiv.children[i];

  if (i >= mn && i < mx) {
    const img2 = gridDiv.children[i + 2];

    img1.classList.add("down");
    img2.classList.add("up");

    setTimeout(() => {
      img1.classList.remove("down");
      img2.classList.remove("up");
      img2.remove();
      gridDiv.insertBefore(img2, gridDiv.children[i]);
      gridDiv.insertBefore(img1, gridDiv.children[i + 3]);
    }, 1000);
  } else if (i === mx) {
    const img2 = gridDiv.children[last];

    img1.classList.add("down");
    img2.classList.add("up");

    setTimeout(() => {
      img1.classList.remove("down");
      img2.classList.remove("up");
      img2.remove();
      gridDiv.insertBefore(img2, gridDiv.children[i]);
      gridDiv.appendChild(img1);
    }, 1000);
  } else {
    const img2 = gridDiv.children[i + 1];

    img1.classList.add("right");
    img2.classList.add("left");

    setTimeout(() => {
      img1.classList.remove("right");
      img2.classList.remove("left");
      img2.remove();
      gridDiv.insertBefore(img2, gridDiv.children[i]);
    }, 1000);
  }
}
