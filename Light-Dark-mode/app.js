let fullDarkMode = document.querySelector('.body-label');
let container = document.querySelector(".container");
let boxDarkMode = document.querySelector('.box-label')

const isfullDarkMode = JSON.parse(localStorage.getItem("fullDarkMode")) || false
const isBoxDarkMode = JSON.parse(localStorage.getItem("boxDarkMode")) || false

boxDarkMode.checked = isBoxDarkMode;

if(isfullDarkMode) {
    container.classList.toggle('dark')
    fullDarkMode.checked = isfullDarkMode;
}

fullDarkMode.addEventListener('change', () => {
    container.classList.toggle('dark')
    boxDarkMode.checked = fullDarkMode.checked
    localStorage.setItem("fullDarkMode", fullDarkMode.checked)
    localStorage.setItem("boxDarkMode", boxDarkMode.checked)
})

boxDarkMode.addEventListener('change', () => {
    localStorage.setItem("boxDarkMode", boxDarkMode.checked)
})
