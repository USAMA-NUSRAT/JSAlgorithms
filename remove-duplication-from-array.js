// write a funtion to remove duplicate items from array
function removeDuplicates(arr){
 let newArr = [];
 let temp ={}
 for(let i =0; i<arr.length; i++){
 if(!temp[arr[i]]){
     newArr.push(arr[i]);
     temp[arr[i]] = true
 }
}
console.log(temp)
return newArr;
}

const duplicatesItems = [1,1,1,2,5,5,2,2,3,1,1,1,1,9,2,2,2,1,1,66,8];
console.log(removeDuplicates(duplicatesItems))