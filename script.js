const snowflakes = [];

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.position = 'absolute';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.top = -Math.random() * 50 + 'px';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.color = 'white';
    snowflake.textContent = '❄';
    document.querySelector('.snowfall').appendChild(snowflake);

    snowflakes.push(snowflake);
}

function animateSnowflakes() {
    snowflakes.forEach(snowflake => {
        let top = parseFloat(snowflake.style.top);
        snowflake.style.top = top + 1 + 'px';

        if (top > window.innerHeight) {
            snowflake.style.top = -Math.random() * 50 + 'px';
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
        }
    });
}

setInterval(createSnowflake, 100);
setInterval(animateSnowflakes, 20);

// Countdown to New Year
const countdownDisplay = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const nextYear = now.getFullYear()+ 1;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
    const timeDifference = newYear - now;

    if (timeDifference <= 0) {
        countdownDisplay.innerHTML = "Жаңа жылыңызбен!";
        clearInterval(countdownInterval);
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        countdownDisplay.style.color = "black" ;
        countdownDisplay.style.fontSize = "2rem" ;
        countdownDisplay.style.fontWeight = "bold" ;
        
    }}


const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display the countdown immediately