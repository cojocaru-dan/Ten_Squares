const loadEvent = function() {

  // Write your JavaScript code after this line
  const rootElement = document.querySelector("body");
  const divClone = document.querySelector("body > div:first-child").cloneNode(true);
  rootElement.appendChild(divClone);
    
  // let currentElem = document.querySelector("body > div:last-child");
  // for (let i = 0; i < 10; i++) {
  //   currentElem.style.borderRadius = "50%";
  //   currentElem = currentElem.firstElementChild;
  // }

  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
