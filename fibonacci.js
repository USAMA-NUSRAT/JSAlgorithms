// there will be two problems
// first: find the given n elements of fibonacci seires
// for example:  fibonacci(3) = [0,1,1] & fibonacci(5) = [0,1,1,2,3]
// first 2 numbers will be 0 and 1
// formula = f2 = f2-1 + f2-2

function fibonacci(n){
    const fib = [0,1];
    // now we have to push elements on 2nd index
    for(let i=2; i<n; i++){
        fib[i] =  fib[i-1] + fib[i-2]
    }
    return fib

}

console.log(fibonacci(7))