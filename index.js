function handleResize() {
  const gridDiv = document.querySelector(".grid-container");
  const gridItem = document.querySelector(".item");
  const textDiv = document.querySelector(".text-div");
  const textNode = document.querySelector(".text");
  const extraDiv = document.querySelectorAll(".extra");

  //   const windowWidth = window.innerWidth - 128;
  //   const numOfCol = Math.round(windowWidth / 100);

  const textHeight = textNode.offsetHeight;
  const itemHeight = gridItem.offsetHeight;

  //   64 --> padding (4rem)
  if (Math.abs(textHeight + 64 - itemHeight) > 0) {
    let numOfRow = Math.ceil((textHeight + 64) / itemHeight);
    numOfRow += 2;
    let gridRow = "";
    let gridCol = "";

    console.log(extraDiv);

    if (numOfRow === 4) {
      extraDiv[0].style.display = "flex";
      extraDiv[1].style.display = "flex";
    } else if (numOfRow === 3) {
      extraDiv[0].style.display = "none";
      extraDiv[1].style.display = "none";
    }

    for (let i = 0; i < numOfRow; i++) gridRow += " 1fr";
    //  updating Row
    gridDiv.style.gridTemplateRows = gridRow;
    textDiv.style.gridRow = `2 / ${numOfRow} `;

    // updation Column
    if (itemHeight <= 60) {
      for (let i = 0; i < 8; i++) gridCol += " minmax(50px, 1fr)";

      gridDiv.style.gridTemplateColumns = gridCol;
      textDiv.style.gridColumn = `2 / 8`;
    } else if (itemHeight > 70 && itemHeight < 85) {
      for (let i = 0; i < 9; i++) gridCol += " minmax(50px, 1fr)";

      gridDiv.style.gridTemplateColumns = gridCol;
      textDiv.style.gridColumn = `2 / 9`;

      // extraDiv[0].style.display = "none";
      // extraDiv[1].style.display = "none";
    } else if (itemHeight > 95) {
      for (let i = 0; i < 10; i++) gridCol += " minmax(50px, 1fr)";

      gridDiv.style.gridTemplateColumns = gridCol;
      textDiv.style.gridColumn = `2 / 10`;
    }

    console.log(Math.abs(textHeight + 64 - itemHeight));
  }

  console.log("th " + parseInt(textHeight + 64));
  console.log("gh " + itemHeight);
}
