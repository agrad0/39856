let num1 = 2;
let num2 = 5;
function compare(number1, number2){
    if (number1 > number2){
    return number1 + ' is biggest number';
    }   else if (number2 > number1){
    return number2 + ' is biggest number';
    }
}
console.log(compare(num1, num2))