let body = document.querySelector("body");
let buttonDiv = document.createElement("div");
let startBtn = document.createElement("button");

body.appendChild(buttonDiv);
body.style.flex = "flex";
body.style.flexDirection = "column";
buttonDiv.appendChild(startBtn);

startBtn.textContent = "Start";

setInterval(myTimer, 10);

let hundredths = 0;
let tenths = 0;
let ones = 0;
let tens = 0;

function myTimer() {
    if(hundredths < 9) {
        hundredths++;
        document.getElementById("msHundreds").textContent = hundredths;
    } else {
        if (tenths < 9) {
            tenths++;
            hundredths = 0;
            document.getElementById("msHundreds").textContent = hundredths;
            document.getElementById("msTens").textContent = tenths;
        } else {
            if (ones < 9) {
                ones++;
                tenths = 0;
                hundredths = 0;
                document.getElementById("secondOnes").textContent = ones;
                document.getElementById("msHundreds").textContent = hundredths;
                document.getElementById("msTens").textContent = tenths;
            } else {
                // tens = 1;
                // ones = 0;
                // tenths = 0;
                // hundredths = 0;
                document.getElementById("secondTens").textContent = 1;
                document.getElementById("secondOnes").textContent = 0;
                document.getElementById("msHundreds").textContent = 0;
                document.getElementById("msTens").textContent = 0;
            }
        }
    }    
}
