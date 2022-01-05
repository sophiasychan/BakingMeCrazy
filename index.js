console.log("HELLO WORLD")

// Function that converts F to C
function solve() {
    let x = parseFloat(document.getElementById("tempF").value);
    let val = (x - 32) * (5/9);
    val = parseInt(val)
    let result = `${val} Celcius`
    document.getElementById("tempC").innerHTML = result;
}

// // Nav hamburger selections
// const burger = document.querySelector("#burger-menu");
// const ul = document.querySelector("nav ul");
// const nav = document.querySelector("nav");

// burger.addEventListener("click", () => {
//     ul.classList.toggle("show");
// });

// // close hamburger menu when a link is clicked
// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach((link) => 
//     link.addEventListener("click", () => {
//         ul.classList.remove("show");
//     })
// );
