function pow(num, degree){

    if( num === null ||  isNaN(+num)) return `Error!arg1 is invalid!`;

    if(degree === null || isNaN(+degree)) return `Error! arg2 is invalid!`;

    if(degree === "") return pow(num, degree = "1");
    
    if(num === "") return `Write a number to be powered!`;


    return (+num)**(+degree);
}

let num = prompt(`Введи число:`);

let degree = prompt("Введи необходимую степень");

const result = alert(pow(num, degree));









