//Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.

let url = "https://api.agify.io";
let outputBox = document.querySelector("#output");
let btn  = document.querySelector("#call_api");
let nameInput = document.querySelector("#name");

function callApiFun() {

    if(!nameInput.value) {alert('name is required!'); return;}

    fetch(`${url}?name=${encodeURI(nameInput.value)}`)
    .then((res) => res.json())
    .then((result) => {
        let {name, age, count} = result;
        let paragraph = `name:${name}<br>age:${age}<br>count:${count}`;
        outputBox.innerHTML = paragraph;
    })
    .catch((err) => console.log(err));
}

btn.addEventListener('click', callApiFun);