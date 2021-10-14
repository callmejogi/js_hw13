let n = +prompt(`Введи число:`);

let nDegree = +prompt("Введи необходимую степень");

function powerOfNum(num, degree = 1){
    num = n;
    degree = nDegree;

    if(num !== Number || degree !== Number){
        return `Error!Type a NUMBER!`;
    }



    return num**degree;
    
}


let num = n;
let degree = nDegree;

console.log(typeof num);
console.log(typeof degree);

const result = alert(powerOfNum(num, degree));


