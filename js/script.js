let n = +prompt(`Введи число:`);

let nDegree = +prompt("Введи необходимую степень");

function powerOfNum(numb,degree = 1){

    if(n === isNaN || nDegree === isNaN){
        return `Error!Type a NUMBER!`;
    }


    let result = numb**degree;

    alert(result);
    return result;


}

powerOfNum(numb = n, degree = nDegree);
