function rSigma(num) {
    if (num == 0) {
        return 0;
    }
    if (num < 0) {
        var poz = Math.abs(num);
        return -(poz + rSigma(poz - 1)) + 1;
    }
    return num + rSigma(num - 1);
}
// console.log(rSigma(4));
// console.log(rSigma(-1));

function rFact(num) {
    num = Math.trunc(num);
    if (num <= 0) {
        return 1;
    }
    return num * rFact(num - 1);
}
console.log(rFact(3))