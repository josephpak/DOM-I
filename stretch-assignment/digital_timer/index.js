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
                tens++;
                ones = 0;
                tenths = 0;
                hundredths = 0;
                document.getElementById("secondTens").textContent = tens;
                document.getElementById("secondOnes").textContent = ones;
                document.getElementById("msHundreds").textContent = hundredths;
                document.getElementById("msTens").textContent = tenths;
            }
        }
    }    
}
