//EX1
/*function num(a){
    if (a%7 === 0){
        console.log('El numero és multiple de 7')
    }
    else if (a%3 === 0){
        console.log('El numero és multiple de 3')
    }
    else if (a%3 === 0 && a%7 === 0 ){
        console.log('El numero és multiple de 3 i  de 7')
    }
    else if (a%3 !== 0 && a%7 !== 0){
        console.log('El numero és multiple de 3')
    }
}
num(9)*/

//EX2
/*var x = 45;
var y = 2;

x >= 10 && x <= 50 ? console.log(x + ' Esta dins del rang')
                   : console.log(x + ' No esta dins del rang')

y >= 10 && y <= 50 ? console.log(y + ' Esta dins del rang')
                   : console.log(y + ' No esta dins del rang')*/

//EX3
/*var nota = prompt("Introdueix la nota: ");
switch (true) {
    case (nota >= 0 && nota <= 4.99):
        console.log("Suspès")
        break;

    case (nota >= 5 && nota <= 5.99):
        console.log("Suficient")
        break;

    case (nota >= 6 && nota <= 6.99):
        console.log("Bé")
        break;

    case (nota >= 7 && nota <= 8.99):
        console.log("Notable")
        break;

    case (nota >= 9 && nota <= 10):
        console.log("Excel·lent")
        break;
}*/

//EX4
/*var num = prompt("Introdueix un numero");
var sum = 0;
var n = 0;
while(sum < num){
    console.log(n)
    n++;
    sum = sum + n
}
console.log(n)
console.log("n és " + n)
console.log("x és " + num)*/

//EX5 
/*var text = "21krei32g8g38g348g";
var num = text.replace(/[^0-9]/gi, "");
var sum = 0;
for(var i = 0; i < num.length; i++){
    sum += Number(num.charAt(i))
}

console.log(sum);*/

//EX6
/*var num1 = 7;
var num2 = 42;
var num3 = 83;
switch (true) {
    case (num1 > num2 && num2 > num3 && num1 > num3):
        console.log(num1 + " " + num2 + " " + num3)
        break;

    case (num1 > num2 && num2 < num3 && num1 > num3):
        console.log(num1 + " " + num3 + " " + num2)
        break;

    case (num1 < num2 && num2 > num3 && num1 > num3):
        console.log(num2 + " " + num1 + " " + num3)
        break;

    case (num1 < num3 && num3 > num2 && num1 > num2):
        console.log(num3 + " " + num1 + " " + num2)
        break;

    case (num1 < num3 && num3 > num2 && num1 < num2):
        console.log(num3 + " " + num2 + " " + num1)
        break;

    case (num1 < num2 && num2 > num3 && num1 < num3):
        console.log(num2 + " " + num3 + " " + num1)
        break;
}*/



//EX7
/*var num = 10
var valor = 0;
while (valor < num){
    valor++;
    if (valor%2 === 0){
        console.log("Parell " + valor)
    }
    else if (valor%2 !== 0){
        console.log("Senar " + valor)
    }
}*/