function handleResize() {
  //   const windowWidth = window.innerWidth - 128;
  // console.log(windowWidth);

  const gridDiv = document.querySelector(".grid-container");
  const gridItem = document.querySelector(".item");
  const textDiv = document.querySelector(".text-div");
  const textNode = document.querySelector(".text");

  //   const numOfCol = Math.round(windowWidth / 100);
  //   let gridCol = "";
  //   for (let i = 0; i < numOfCol; i++) {
  //     gridCol += " auto";
  //   }
  // console.log(numOfCol);

  const textHeight = textNode.offsetHeight;
  const itemHeight = gridItem.offsetHeight;

  //   64 --> padding (4rem), 5 --> ignoring the minimum difference
  if (Math.abs(textHeight + 64 - itemHeight) > 2) {
    let numOfRow = Math.ceil((textHeight + 64) / itemHeight);
    numOfRow += 2;
    let gridRow = "";

    for (let i = 0; i < numOfRow; i++) {
      gridRow += " 1fr";
    }

    gridDiv.style.gridTemplateRows = gridRow;
    textDiv.style.gridArea = `2 / 2 / ${numOfRow} / 9`;
    console.log("text size changed");
    console.log(Math.abs(textHeight + 64 - itemHeight));
  }

  console.log("th " + parseInt(textHeight + 64));
  console.log("gh " + itemHeight);
}
