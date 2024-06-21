const userInput = document.querySelector('input');
const lower = document.querySelector(".lower");
const upper = document.querySelector(".upper");
const camel = document.querySelector(".camel")
const pascal = document.querySelector(".pascal")
const snake = document.querySelector(".snake")
const kebab = document.querySelector(".kebab")
const trim = document.querySelector(".trim")

function toCamelCase(str) {
    debugger
    return str
        .replace(/[-_]/g, ' ')
        .toLowerCase()
        .split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word;
            }

            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

function toPascalCase(str) {
    return str
        .replace(/[-_]/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

function toSnakeCase(str) {
    return str
        .toLowerCase()
        .split(/[\s-_]+/)
        .join('_');
}

function toKebabCase(str) {
    return str
        .toLowerCase()
        .split(/[\s-_]+/)
        .join('-');
}

function toTrimCase(str) {
    return str
        .trim()
        .split(/\s+/)
        .join('');
}

function updateScreen() {

    lower.innerText = userInput.value.toLowerCase();
    upper.innerText = userInput.value.toUpperCase();
    camel.innerText = toCamelCase(userInput.value);
    pascal.innerText = toPascalCase(userInput.value);
    snake.innerText = toSnakeCase(userInput.value);
    kebab.innerText = toKebabCase(userInput.value);
    trim.innerText = toTrimCase(userInput.value)
}

updateScreen()

userInput.addEventListener('input', updateScreen)
