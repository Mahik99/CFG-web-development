function buttonClick(currentContainer, nextContainer) {
    document.getElementById(currentContainer).classList.add('slide-out');
    document.getElementById(currentContainer).addEventListener('animationend', () => {
        document.getElementById(currentContainer).style.display = 'none';
        document.getElementById(nextContainer).style.display = 'flex';
        document.getElementById(nextContainer).classList.add('slide-in');
    }, { once: true });
}
     function buttonClick(currentContainer, nextContainer) {
         document.getElementById(currentContainer).style.display = 'none';
            document.getElementById(nextContainer).style.display = 'block';
        }

        function showPopup() {
            document.getElementById('popup').style.display = 'block';
        }

      document.getElementById('yesButton').addEventListener('click', function() {
            window.location.href = 'https://hopeivy12.github.io/group-3-ck24ukh4/finaldates.html';
       });

         document.getElementById('noButton').addEventListener('click', function() {
            document.getElementById('popup').style.display = 'none';
         });
/*
const likedProfiles = [];
function handleButtonClick(currentContainer, nextContainer, action, profile) {
    console.log(`Button clicked: ${action}`);
    if (action === 'like') {
        likedProfiles.push(profile);
    }
    if (nextContainer === 'liked-container') {
        showFinalDatesPopup();
    } else {
        transitionContainers(currentContainer, nextContainer);
    }
}
function transitionContainers(currentContainer, nextContainer) {
    document.getElementById(currentContainer).classList.add('slide-out');
    document.getElementById(currentContainer).addEventListener('animationend', () => {
        document.getElementById(currentContainer).style.display = 'none';
        document.getElementById(nextContainer).style.display = 'flex';
        document.getElementById(nextContainer).classList.add('slide-in');
    }, { once: true });
}
function showFinalDatesPopup() {
    const popup = document.getElementById('final-dates-popup');
    popup.style.display = 'block';
}
function closeFinalDatesPopup() {
    const popup = document.getElementById('final-dates-popup');
    popup.style.display = 'none';
}
function goToFinalDatesPage() {
    localStorage.setItem('likedProfiles', JSON.stringify(likedProfiles));
    window.location.href = 'final-dates.html';
}
document.getElementById('yes-button').addEventListener('click', goToFinalDatesPage);
document.getElementById('no-button').addEventListener('click', closeFinalDatesPopup);*/


function submitFunction(){
    var text;
       var answers = document.getElementById("fancy").value;
      
        switch(answers) {
          case "Porridge":
            text = "Porridge is a great choice! We will talk to Porridge and get back to you to see if its a Pawfect Match!";
          break;
          case "Coco":
          text = "Coco is a great choice! We will talk to Coco and get back to you to see if its a Pawfect Match!";
          break;
          case "Rocky":
          text = "Rocky is a great choice! We will talk to Rocky and get back to you to see if its a Pawfect Match!";
          break;
          case "Kitty":
            text = "Kitty is a great choice! We will talk to Kitty and get back to you to see if its a Pawfect Match!";
          break;
          case "Scraggles":
          text = "Coco is a great choice! We will talk to Scraggles and get back to you to see if its a Pawfect Match!";
          break;
          case "Manny":
          text = "Manny is a great choice! We will talk to Manny and get back to you to see if its a Pawfect Match!";
          break;
          default:
          text = "We are sorry you couldn't find your Pawfect Match, we hope to see you again soon!";
        }
        document.getElementById("response").innerHTML = text;
    }
