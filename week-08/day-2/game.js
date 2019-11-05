// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

let candyBtn = document.querySelector('.create-candies');
let buyBtn = document.querySelector('.buy-lollypops');
let rainBtn = document.querySelector('.candy-machine');

let candies = document.querySelector('.candies');
let candieCount = 0;

let lollypops = document.querySelector('.lollypops');
let lolly = '🍭';
let lollyCount = 0;

let candyRate = 0;
let candySpeed = 1;

let speed = document.querySelector('.speed');

candyBtn.onclick = e => {
    candieCount += 1000;
    candies.textContent = candieCount;
}

buyBtn.onclick = e => {
    if (candieCount >= 100) {
        candieCount -= 100;
        candies.textContent = candieCount;
        lollyCount++;
        lollypops.textContent += lolly;
    }
}

rainBtn.onclick = e => {
    if (lollyCount >= 10 && candySpeed < 10) {
        candySpeed += 9;
    } else if (lollyCount >= 10 && candySpeed >= 10) {
        candySpeed += 10;
    }
}

function generateCandies () {
    candyRate = Math.floor(lollyCount/10) * candySpeed;
    candieCount += candyRate;
    candies.textContent = candieCount;
    speed.textContent = candyRate;
}

setInterval(generateCandies, 1000);