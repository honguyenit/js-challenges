// function countOccurrences(str, char) {
//     var arr = str.split('')
//     let occurrences = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === char){
//             occurrences++
//         }
//     }
//     return occurrences
// }

// function countOccurrences(str, char) {
//     let occurrences = 0
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === char){
//             occurrences++
//         }
//     }
//     return occurrences
// }

// function countOccurrences(str, char) {
//     return str.split(char).length - 1
// }

const countOccurrences = (str, char) => str.split(char).length -1

module.exports = countOccurrences;
