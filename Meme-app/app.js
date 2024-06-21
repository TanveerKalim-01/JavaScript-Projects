const genMemeBtn = document.querySelector('.meme-btn')
const title = document.querySelector('.title')
const url = document.querySelector('.url')
const author = document.querySelector('.author')

function memeGen() {

    fetch(" https://meme-api.com/gimme/wholesomememes")
        .then(res => res.json())
        .then(res => {
            title.innerText = res.title;
            url.src= ''
            url.src = res.url;
            author.innerText = `Meme by : ${res.author}`
        })
}
memeGen();
genMemeBtn.addEventListener('click',memeGen) 