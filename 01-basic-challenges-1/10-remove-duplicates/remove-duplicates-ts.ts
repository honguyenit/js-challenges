// function removeDuplicates(duplicatedArr: any[]) {
//     let nonDuplicatedArray: any[] = []
//     for(let i = 0; i < duplicatedArr.length; i++){
//         if(!isArrayContainsElement(nonDuplicatedArray, duplicatedArr[i])){
//             nonDuplicatedArray.push(duplicatedArr[i])
//         }
//     }

//     return nonDuplicatedArray
// }

// function isArrayContainsElement(arr: any[], element: any){
//     for(let i = 0; i < arr.length; i ++){
//         if(arr[i]=== element){
//             return true
//         }
//     }

//     return false
// }

// function removeDuplicates(duplicatedArr: any[]) {
//     const setArr = new Set()
//     for(let i = 0; i < duplicatedArr.length; i ++){
//         setArr.add(duplicatedArr[i])
//     }
//     return setArr
// }

function removeDuplicates(duplicatedArr: any[]) {
    return Array.from(new Set(duplicatedArr))
}

const result = [
    1,
    2,
    3,
    4,
    5,
    5,
    5,
    6,
    7,
    8,
    'hello',
    'hello',
    true,
    true,
  ];
  
  console.log(": ", result);
  console.log("removeDuplicates: ", removeDuplicates(result));