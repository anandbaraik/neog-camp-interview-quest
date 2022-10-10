//Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.

let url = "https://api.agify.io";
let outputBox = document.querySelector("#output");
let btn  = document.querySelector("#call_api");
let nameInput = document.querySelector("#name");

function callApiFun() {
    fetch(`${url}?name=${nameInput.value}`)
    .then((res) => res.json())
    .then((result) => {
        let paragraph = `name:${result.name}<br>age:${result.age}<br>count:${result.count}`;
        outputBox.innerHTML = paragraph;
    })
    .catch((err) => console.log(err));
}

btn.addEventListener('click', callApiFun);