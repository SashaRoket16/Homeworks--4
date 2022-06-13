//Завдання №1
/*var ar = array = [23, 34, 57, 78, 689, -10, 0, -100];
let t = fn = () => {
    for (let index = 0; index < array.length; index++) {
        var rtt = array[index];
        if (rtt == 0) {
            console.log("true")
        }
        (rtt <= 0) ? console.log("True"): console.log("false");

    }
};


function map(fn, array) {
    console.log(fn());
    return array;
};
console.log(map(t, ar))*/
//Завдання №2
var age = parseInt(prompt("Ведіть скільки вам років = "))

function checkAge(age) {
    (age > 18) ? (`return true `) : `return`
    confirm("Батьки Дозволяють ?")
};

checkAge(age)