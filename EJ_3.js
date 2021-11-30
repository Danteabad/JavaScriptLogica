//EX1
function num(a){
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

num(9)
