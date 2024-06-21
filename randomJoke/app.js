let apiUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode&type=single";
let jokeBtn = document.querySelector("#r-joke button");

jokeBtn.addEventListener('click', () => {
  let p = document.querySelector("#r-joke p");

  axios.get(apiUrl).then((res) => {
    p.innerText = res.data.joke;
  }).catch((err) => {
    p.innerText = "No joke found";
    console.log(err);
  })
})

// Second Api project
const catUrl = 'https://cataas.com/cat/cute/says/';
const inp = document.querySelector("#r-cat input");
const catBtn = document.querySelector('#r-cat button');
const img = document.querySelector('#r-cat img');

catBtn.addEventListener("click", async () => {
  if (inp.value !== "") {
    const url = catUrl + inp.value + "?fontColor=orange&fontSize=30&square";
    inp.value = "";
    try {
      const res = await axios.get(url, );
      console.log(res);
      console.log(res.config.url);
      let imgUrl = res.config.url;
      img.setAttribute("src", imgUrl);
    } catch (err) {
      console.error(err);
      img.setAttribute("src", '/');
      img.setAttribute("alt", "No image found");
    }
  }
});


// // Third API for Project

// Reddit API endpoint URL
const url = 'https://www.reddit.com/r/Wallstreetbets/top.json?limit=4';

// Parameters (optional)
// const params = {
//   limit: 5 // Number of top posts to retrieve
// };

// Make the GET request
axios.get(url )
  .then(response => {
    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      // Access and process the retrieved data as needed
      const data = response.data.data.children;
      data.forEach(post => {
        console.log(post.data.title);
      });
    } else {
      console.log('Failed to retrieve data:', response.status);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
