let screen = document.getElementById('display');


function show(n) {
    display.value += n;
}

function allclr() {
    display.value = "";

}

function res() {
    display.value = eval(display.value);
}

function del() {
    display.value = display.value.slice(0, -1);
}