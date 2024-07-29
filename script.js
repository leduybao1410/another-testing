// Set the duration for the countdown (in seconds)
const countdownDuration = 40; // 40 seconds
let timeRemaining = countdownDuration;

// Function to update the progress bar color based on the remaining time percentage
function updateProgressBarColor(percentage) {
    const progressBar = document.getElementById("progress-bar");
    if (percentage > 75) {
        progressBar.style.backgroundColor = 'green';
    } else if (percentage > 50) {
        progressBar.style.backgroundColor = 'yellowgreen';
    } else if (percentage > 25) {
        progressBar.style.backgroundColor = 'orange';
    } else {
        progressBar.style.backgroundColor = 'red';
    }
}

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {
    // Calculate the time remaining
    timeRemaining--;

    // Calculate the percentage of the progress bar
    const percentage = (timeRemaining / countdownDuration) * 100;

    // Update the progress bar width
    document.getElementById("progress-bar").style.width = percentage + "%";
    // Update the progress bar color
    updateProgressBarColor(percentage);

    // Update the time remaining text
    const seconds = timeRemaining % 60;
    document.getElementById("time-remaining").innerHTML =  seconds + "s";

    // If the countdown is finished, clear the interval and show "TIME OUT"
    if (timeRemaining <= 0) {
        clearInterval(countdownFunction);
        document.getElementById("time-remaining").innerHTML = "Time out";
    }
}, 1000);
