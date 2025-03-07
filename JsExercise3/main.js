const inputNum = document.getElementById("inputNum");
const allNum = document.getElementById("inputed");
const sumOfAll = document.getElementById("sum");
const highestNum = document.getElementById("highest");
const lowestNum = document.getElementById("lowest");

let arr = [];
let sum = 0;
let lowest = 0;
let highest = 0;

function insertData(){
    if(!(inputNum.value === "")){
        arr.push(parseInt(inputNum.value));
        highest = inputNum.value;
        lowest = highest;
        inputNum.value = "";
    }else {
        alert("Please Input All of the Parameters!");
    }

    sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    for(let i=0; i<arr.length; i++) {
        if (highest < arr[i]) {
            highest = arr[i];
        }
        
        if (lowest > arr[i]) {
            lowest = arr[i];
        }
    }
    allNum.innerHTML = arr.join("<br>")
    sumOfAll.innerHTML = sum;
    highestNum.innerHTML = highest;
    lowestNum.innerHTML = lowest;
}
function deleteData(){
    allNum.innerHTML = "";
    sumOfAll.innerHTML = "";
    highestNum.innerHTML = "";
    lowestNum.innerHTML = "";
    arr = [];
}