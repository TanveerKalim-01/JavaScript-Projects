let btn = document.querySelector("button");
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener("click", function () {
    if (inp.value != "" && inp.value.trim() != "") {
        let item = document.createElement("li");
        item.innerText = inp.value;

        let delBtn = document.createElement("button");
        delBtn.innerText = "del";
        delBtn.classList.add = "del";

        item.append(delBtn);
        ul.append(item);
        inp.value = "";
    }

});

// Event Delegation method jo ki event bubling pr base hai.

ul.addEventListener('click', function (event) {
    if (event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
    }
});

// isko comment kr diya bcz y new same type k element k liye listen nhi krega usko solve krega event delegation method
// let delBtns = document.querySelectorAll("ul li button");

// for(delbtn of delBtns)  {
//     delbtn.addEventListener("click",function () {
//         this.parentElement.remove();
//     })
// }