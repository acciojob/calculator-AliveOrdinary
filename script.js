 //your code here
let input = document.getElementById("input");

function display(num) {
    input.value += num
}

function calculate() {
    try{
        input.value = eval(input.value);
    }

    catch(err) {
        input.value = "Invalid";
    }
}

function clr() {
    input.value = "";
}

function del() {
    if(input.value == "NaN" || input.value=="Infinity"){
        clr()
    }
    input.value = input.value.slice(0,-1)
}