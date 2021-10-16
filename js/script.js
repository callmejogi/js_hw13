function pow(num, degree = "1"){
    console.log(typeof num);
    console.log(typeof degree);


    if(typeof num !== "number" || typeof degree !== "number"){
        return `Error!Type a NUMBER!`;
    }


    

    return num**degree;

}

let num = +prompt(`Введи число:`);

let degree = +prompt("Введи необходимую степень");

const result = alert(pow(num, degree));








