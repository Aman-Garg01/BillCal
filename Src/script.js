// Find bill to unit

const Button = document.querySelector("#but")

let unit = 0;
function fun() {
    const Input = document.querySelector("#ip");
    const Div = document.querySelector("#div");

    if (Input.value <= 60) {
        unit = Input.value / 3
    } else if (Input.value > 60 && Input.value <= 350) {
        let u = 60 / 3
        unit = (Input.value - 60) / 7 + u
    } else if (Input.value > 350) {
        let v = 350 / 7
        unit = (Input.value - 350) / 10 + v
    }

    Div.innerHTML = `Your Electricity Bill Unit is ${unit}`
}


// Find unit to bill

const Button2 = document.querySelector(".but1")

let bill = 0;
function fun1() {
    const Input2 = document.querySelector(".input")
    const Div2 = document.querySelector(".div1")

    if (Input2.value <= 20) {
        bill = Input2.value * 3
    } else if (Input2.value > 20 && Input2.value <= 50) {
        let b = 20 * 3
        bill = (Input2.value - 20) * 7 + b
    } else if (Input2.value > 50) {
        let b2 = 50 * 7
        bill = (Input2.value - 50) * 10 + b2
    }
    Div2.innerHTML = `Your Electricity Bill is Rs.${bill}`
}