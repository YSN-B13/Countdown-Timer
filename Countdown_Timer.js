let countdown;
const timerDisplay = document.getElementById('timer');

function startTimer() {
    clearInterval(countdown);
    const seconds = parseInt(document.getElementById('seconds').value);
    if (isNaN(seconds) || seconds < 1) {
        alert("Please enter a valid number of seconds greater than 0.");
        return;
    }

    let remainingSeconds = seconds;
    updateTimerDisplay(remainingSeconds);
    timerDisplay.classList.remove('pulse');

    countdown = setInterval(() => {
        remainingSeconds--;
        if (remainingSeconds < 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "Time's up!";
            timerDisplay.classList.add('pulse');
        } else {
            updateTimerDisplay(remainingSeconds);
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const display = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    timerDisplay.textContent = display;
}

// Add this for a more interactive feel
document.querySelector('button').addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.95)';
});

document.querySelector('button').addEventListener('mouseup', function() {
    this.style.transform = 'scale(1)';
});