function handleResize() {
  //   const windowWidth = window.innerWidth - 128;
  // console.log(windowWidth);

  const div = document.querySelector(".grid-container");
  const gridItem = document.querySelector(".item");
  const textNode = document.querySelector(".text");

  //   const numOfCol = Math.round(windowWidth / 100);
  //   let gridCol = "";
  //   for (let i = 0; i < numOfCol; i++) {
  //     gridCol += " auto";
  //   }
  // console.log(numOfCol);

  const textHeight = textNode.offsetHeight;
  const itemHeight = gridItem.offsetHeight;

  if (textHeight % itemHeight > 5) {
    let numOfRow = Math.ceil(textHeight / itemHeight);
    numOfRow += 2;
    let gridRow = "";

    for (let i = 0; i < numOfRow; i++) {
      gridRow += " 1fr";
    }

    div.style.gridTemplateRows = gridRow;
    textNode.style.gridArea = "2 / 2 / 4 / 9";
  }
  console.log("th " + textHeight);
  console.log("gh " + itemHeight);
}
