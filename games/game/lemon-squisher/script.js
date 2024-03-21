// Game variables
let points = 0;
let speedLevel = 1;
let powerLevel = 1;

// Function to update points and lemon size
function updateGame() {
    document.getElementById('points').innerText = points;

    // Update lemon size based on power level
    let lemonSize = 100 + (powerLevel - 1) * 10;
    document.getElementById('lemon').style.width = lemonSize + 'px';
    document.getElementById('lemon').style.height = lemonSize + 'px';
}

// Function to handle clicking the lemon
document.getElementById('lemon').addEventListener('click', function() {
    points += 10 * (speedLevel * powerLevel);
    updateGame();
});

// Function to buy speed
function buySpeed() {
    let cost = speedLevel * 1000;
    if (points >= cost && speedLevel < 1000) {
        points -= cost;
        speedLevel++;
        updateGame();
    }
}

// Function to buy power
function buyPower() {
    let cost = powerLevel * 1000;
    if (points >= cost && powerLevel < 1000) {
        points -= cost;
        powerLevel++;
        updateGame();
    }
}

// Initial game setup
updateGame();
