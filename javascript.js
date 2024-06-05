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
document.getElementById('no-button').addEventListener('click', closeFinalDatesPopup);
