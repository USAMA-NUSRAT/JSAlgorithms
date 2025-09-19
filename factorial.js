// there will be two problems
// first: find the factorial of  n number
// for example:  factorial(5) = 120
// first 2 numbers will be 0 and 1
// formula = n*n-1*n-2*.....1

function factorial(n){
    for(let i = n-1 ; i>=1; i--){
        n*=i
    }
    return n
}
console.log(factorial(4))