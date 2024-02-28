const selectors = {
    firstButton: document.querySelector(".js-firstButton"),
    secondButton: document.querySelector(".js-secondButton"),
    thirdButton: document.querySelector(".js-thirdButton"),
    firstplayercount: document.querySelector(".js-fplayercount"),
    secondplayercount: document.querySelector(".js-splayercount"),
    wininput: document.querySelector(".js-input"),
    total: 0,
  };
  
  selectors.firstButton.addEventListener("click", () => {
    selectors.firstplayercount.innerHTML++;
    if (selectors.wininput.value == selectors.firstplayercount.innerHTML) {
      selectors.firstplayercount.style.color = "green";
      selectors.secondplayercount.style.color = "red";
      selectors.firstButton.disabled = true;
      selectors.secondButton.disabled = true;
    }
  });
  
  selectors.secondButton.addEventListener("click", () => {
    selectors.secondplayercount.innerHTML++;
    if (selectors.wininput.value == selectors.secondplayercount.innerHTML) {
      selectors.firstplayercount.style.color = "red";
      selectors.secondplayercount.style.color = "green";
      selectors.firstButton.disabled = true;
      selectors.secondButton.disabled = true;
    }
  });
  
  selectors.thirdButton.addEventListener("click", () => {
    console.log("third button");
    selectors.firstplayercount.innerHTML = 0;
    selectors.secondplayercount.innerHTML = 0;
    selectors.firstButton.disabled = false;
    selectors.secondButton.disabled = false;
    selectors.firstplayercount.style.color = "black";
      selectors.secondplayercount.style.color = "black";
  });