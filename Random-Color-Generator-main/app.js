let btn = document.querySelector("button");
let div = document.querySelector("div");
let h1 = document.querySelector("h1");
let p = document.createElement("p");

function getRandom() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return (`rgb(${red}, ${green}, ${blue})`);
}

btn.addEventListener("click", function () {
    p.innerText = "";
    let randomColor = getRandom();
    h1.innerText = randomColor;
    h1.style.color = randomColor;

    p.innerText = "This is your new color."
    div.append(p);
    div.style.backgroundColor = randomColor;
})