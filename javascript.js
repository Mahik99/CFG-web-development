function buttonClick(currentContainer, nextContainer) {
  document.getElementById(currentContainer).classList.add("slide-out");
  document.getElementById(currentContainer).addEventListener(
    "animationend",
    () => {
      document.getElementById(currentContainer).style.display = "none";
      document.getElementById(nextContainer).style.display = "flex";
      document.getElementById(nextContainer).classList.add("slide-in");
    },
    { once: true }
  );
}
function buttonClick(currentContainer, nextContainer) {
  document.getElementById(currentContainer).style.display = "none";
  document.getElementById(nextContainer).style.display = "block";
}

function showPopup() {
  document.getElementById("popup").style.display = "block";
}

document.getElementById("yesButton").addEventListener("click", function () {
  window.location.href =
    "https://hopeivy12.github.io/group-3-ck24ukh4/finaldates.html";
});

document.getElementById("noButton").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

function submitFunction() {
  let text;
  let answers = document.getElementById("fancy").value;

  switch (answers) {
    case "Porridge":
      text =
        "Porridge is a great choice! We will talk to Porridge and get back to you to see if its a Pawfect Match!";
      break;
    case "Coco":
      text =
        "Coco is a great choice! We will talk to Coco and get back to you to see if its a Pawfect Match!";
      break;
    case "Rocky":
      text =
        "Rocky is a great choice! We will talk to Rocky and get back to you to see if its a Pawfect Match!";
      break;
    case "Kitty":
      text =
        "Kitty is a great choice! We will talk to Kitty and get back to you to see if its a Pawfect Match!";
      break;
    case "Scraggles":
      text =
        "Coco is a great choice! We will talk to Scraggles and get back to you to see if its a Pawfect Match!";
      break;
    case "Manny":
      text =
        "Manny is a great choice! We will talk to Manny and get back to you to see if its a Pawfect Match!";
      break;
    default:
      text =
        "We are sorry you couldn't find your Pawfect Match, we hope to see you again soon!";
  }
  document.getElementById("response").innerHTML = text;
}
