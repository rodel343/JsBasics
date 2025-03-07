const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const sumTxt = document.getElementById("sumTxt");
const difTxt = document.getElementById("difTxt");
const prodTxt = document.getElementById("prodTxt");
const quotTxt = document.getElementById("quotTxt");

let sum = 0;


function calculate() {
    if(num1Txt.value == "" || num2Txt.value == "") {
        alert("You should fill-out all the entries");
    } else{
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        sumTxt.innerHTML = sum
        dif = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        difTxt.innerHTML = dif
        prod = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        prodTxt.innerHTML = prod
        quot= parseInt(num1Txt.value) / parseInt(num2Txt.value);
        quotTxt.innerHTML = quot
    }
}

function clear1() {
    num1Txt.value = ""
    num2Txt.value = ""
    sumTxt.innerHTML = ""
    difTxt.innerHTML = ""
    prodTxt.innerHTML = ""
    quotTxt.innerHTML = ""
    sum = 0;
}

