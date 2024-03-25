// function findMaxNumber(arr) {
//     let maxNumber =  arr[0]
//     for(let i=0; i < arr.length; i++){
//         if(arr[i] > maxNumber){
//             maxNumber = arr[i]
//         }
//     }

//     return maxNumber
// }

function findMaxNumber(arr) {
   return Math.max(...arr)
}

module.exports = findMaxNumber;
