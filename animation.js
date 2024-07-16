function animateText() {
  const content = [
    "d",
    "r",
    "i",
    "v",
    "e",
    "n",
    " ",
    "b",
    "y",
    " ",
    "t",
    "h",
    "e",
    " ",
    "t",
    "h",
    "o",
    "u",
    "g",
    "h",
    "t",
    "s",
  ];

  const target = document.getElementById("testing");
  index = 0;
  target.textContent = "";

  const theLoop = setInterval(() => {
    target.innerHTML += content[index];
    index++;
    if (index >= content.length) {
      clearInterval(theLoop);
    }
  }, 50);
}

animateText();
