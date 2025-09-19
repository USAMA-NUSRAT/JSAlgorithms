
// return true if brackets in correct order other wise return false
// for example:  [{()}] = true; {(}) =false


function isCorrectSequence(str){
    console.log('function execution')
    let stack = [];
    const brackets ={
        '(':')',
        '{':'}',
        '[':']'
    }
    for(let i = 0 ; i<str.length; i++){
        if(['(','{','['].includes(str[i])){
            stack.push(brackets[str[i]])
        }else if([')','}',']'].includes(str[i])){
            if(stack.pop()!==str[i]){
                return false
            }
        }
    }
    return stack.length==0
}
const str = '[{()}]'
console.log(isCorrectSequence(str))