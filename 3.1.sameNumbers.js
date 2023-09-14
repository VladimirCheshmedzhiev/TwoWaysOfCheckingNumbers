function sameNumbers(num) {

    let isSame = true;
    let numAsString = num.toString();
    let sum = 0;
    numAsString.split("").map((x, i) => {
        if (x !== numAsString[0]){
            isSame = false;
        }
        return sum += Number(x);
    })
    console.log(isSame);
    console.log(sum);
}

sameNumbers(1234)