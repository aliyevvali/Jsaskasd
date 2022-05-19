let quizImg = document.querySelector(".quiz-header");
let inputs = document.getElementById("inputs");

let btn = document.getElementById("cbtn")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



function fetchFun() {
    fetch("https://restcountries.com/v3.1/all").then(Response => Response.json()).then(data => {

        let random = getRandomInt(data.length)

        quizImg.innerHTML = `<img src="${data[random].flags.png}" alt="">
        <h2>Quiz txt</h2> <p></p>`

        inputs.innerHTML = `<li>
        <input type="radio" name="answer" id="a" class="answer">
        <label for="a" id="a-txt">${data[random + 1].name.common}</label>
    </li>
    <li>
        <input type="radio" name="answer" id="b" class="answer">
        <label for="b" id="b-txt">${data[random + 2].name.common}</label>
    </li>
    <li>
        <input type="radio" name="answer" id="c" class="answer">
        <label for="c" id="c-txt">${data[random + 3].name.common}</label>
    </li>
    <li>
        <input type="radio" name="answer" id="d" class="answer">
        <label for="d" id="d-txt">${data[random].name.common}</label>
    </li>
</ul>`


    })
}
let oneval = document.getElementById("one").value
console.log(oneval);
btn.addEventListener("click", fetchFun())





let fistdiv = document.querySelector(".fist");
let hidbtn = document.getElementById("hidbtn");
let hideClass = document.getElementById("impid");

hidbtn.addEventListener("click", function () {

    let one = document.getElementById("one").value;
    let two = document.getElementById("two").value;
    var total = one * two;

    let interval = setInterval(() => {
        document.getElementById("time").innerText = `Total : ${total}`
        total--;

        if (total == 0) {
            clearInterval(interval);
            alert("Over");
            fistdiv.classList.add("hide");
            hideClass.classList.add("hide")
        }
    }, 1000);
    fistdiv.classList.add("hide");
    hideClass.classList.remove("hide")

})






