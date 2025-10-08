
const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function romanToNumber(roman) {
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
        const currentVal = romanValues[roman[i]];
        const nextVal = romanValues[roman[i + 1]];
        if (currentVal < nextVal) {
            total -= currentVal
        }
        else {
            total += currentVal
        }
    }

    return total;

}

const roman = 'MCMXCIX'

console.log(romanToNumber(roman))