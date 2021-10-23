function isValidNumber(arg){
    if (typeof arg === "number" && !isNaN(arg)){
        return true;
    }

    return false;
}

function pow(num, degree = 1){
    if(!isValidNumber(num)) return `arg1 is invalid!`;
    if(!isValidNumber(degree)) return `arg2 is invalid!`;

    return Math.pow(num,degree);
}

const result = alert((pow(+prompt('Number 1'),+prompt('Number 2'))));













