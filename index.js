console.log("HELLO WORLD")

// Function that converts F to C
function solve() {
    let x = parseFloat(document.getElementById("tempF").value);
    let val = (x - 32) * (5/9);
    val = parseInt(val)
    let result = `${val} Celcius`
    document.getElementById("tempC").innerHTML = result;
}

// Function that displays value
// function dis(val) {
//     document.getElementById("result").value+=val
// }
