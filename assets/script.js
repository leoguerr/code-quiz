//Timer countdown 
const startingMinutes = 1.5; 
let time = startingMinutes * 60; 
const countdownEl = document.getElementById('countdown');

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    // console.log("countdownEl", countdownEl)
    countdownEl.innerHTML = minutes + ':' + seconds;
    time--; 

}
setInterval(updateCountdown, 1000);