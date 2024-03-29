// function removeDuplicates(duplicatedArr) {
//     let nonDuplicatedArray = []
//     for(let i = 0; i < duplicatedArr.length; i++){
//         if(!nonDuplicatedArray.includes(duplicatedArr[i])){
//             nonDuplicatedArray.push(duplicatedArr[i])
//         }
//     }

//     return nonDuplicatedArray
// }

// function removeDuplicates(duplicatedArr) {
//     const setArr = new Set()
//     for(let i = 0; i < duplicatedArr.length; i ++){
//         setArr.add(duplicatedArr[i])
//     }
//     return [...setArr]
// }

function removeDuplicates(duplicatedArr) {
    return Array.from(new Set(duplicatedArr))
}


module.exports = removeDuplicates;
