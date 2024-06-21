let span = document.querySelector("span");

let wordsList = ["Developer", "Student", "Coder", "Writer", "Blogger"];

let wordIdx = 0;
let charIdx = 0;
let skipUpdate = 0;

const intervalId = setInterval(() => {
    if (skipUpdate > 0) {
        skipUpdate--;
        return;
    }

    const currWord = wordsList[wordIdx];
    if (wordIdx > wordsList.length - 1) {
        wordIdx = 0;
    } else
        if (charIdx < currWord.length) {
            skipUpdate = 1;
            span.innerText += currWord[charIdx];
            charIdx++;

            if (span.innerText.length === currWord.length) {
                skipUpdate = 6;
            }
        } else {
            span.innerText = span.innerText.slice(0, span.innerText.length - 1);
            if (span.innerText.length === 0) {
                charIdx = 0;
                wordIdx++;
            }
        }
}, 150);

// let span = document.querySelector("span");
// let wordsList = ['Developer', 'Student', 'Coder', 'Writer', 'Blogger'];

// let wordIdx = 0;
// let charIdx = 0;
// let isDeleting = false;

// function type() {
//     const currentWord = wordsList[wordIdx];
//     let displayText = currentWord.slice(0, charIdx);

//     span.innerText = displayText;

//     if (!isDeleting && charIdx < currentWord.length) {
//         charIdx++;
//         setTimeout(type, 150);
//     } else if (isDeleting && charIdx > 0) {
//         charIdx--;
//         setTimeout(type, 100);
//     } else if (charIdx === currentWord.length) {
//         isDeleting = true;
//         setTimeout(type, 1500); // Pause before deleting
//     } else if (charIdx === 0) {
//         isDeleting = false;
//         wordIdx = (wordIdx + 1) % wordsList.length;
//         setTimeout(type, 500); // Pause before typing next word
//     }
// }

// type();

// // let intervalId = setInterval(() => {
// //     if (listIdx > wordsList.length - 1) {
// //         listIdx = 0;
// //     }

// //     if (wordIdx === wordsList[listIdx].length) {
// //         span.innerText = span.innerText.slice(0, span.innerText.length - 1)
// //     } else {
// //         span.innerText += wordsList[listIdx][wordIdx];
// //         wordIdx++;
// //     }
// //     if (span.innerText.length === 0) {
// //         wordIdx = 0;
// //         listIdx++;
// //     }

// // }, 200)
