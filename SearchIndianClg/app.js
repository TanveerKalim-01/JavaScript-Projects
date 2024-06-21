let url = "http://universities.hipolabs.com/search?country=india"

let btn = document.querySelector("button");
let inp = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener('click', async () => {
    let state = inp.value.trim();
    if (state) {
        await getCol(state);
    }
})

async function getCol(state) {

    ul.innerText = "";
    try {
        let res = await axios.get(url);
        let colArr = res.data;

        let newArr = colArr.filter((el) => {
            return el["state-province"] != null && el["state-province"].toLowerCase() == state.toLowerCase();
        });

        if (newArr.length != 0) {

            for (col of newArr) {
                let li = document.createElement('li');
                li.innerText = col.name;
                ul.append(li);
            }

        } else {
            throw new Error;
        }
    }
    catch (err) {
        ul.innerText = "Error 404 No Data Found."
        console.log("Error", err.message)
    }
};
