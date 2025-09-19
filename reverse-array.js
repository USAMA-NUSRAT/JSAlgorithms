// reverse Array without using any built in method
function reverseArrays(arr){
 let newArr = [];

 for(let i =arr.length-1; i>=0; i--){
   newArr.push(arr[i])
}

return newArr;
}

const items = [1,2,3,4,5,6];
console.log(reverseArrays(items))