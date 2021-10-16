function pow(num, degree){

    if( num === null || degree === null){
        return `Error!Type something!`;
    }else if(isNaN(+num) || isNaN(+degree)){
        return `Lol it's NaN...`;
    }

    if(degree === ""){
        return pow(num, degree = "1");
    }

    if(num === ""){
        return `Write a number to be powered!`;
    }

    return (+num)**(+degree);
}

let num = prompt(`Введи число:`);

let degree = prompt("Введи необходимую степень");


const result = alert(pow(num, degree));









