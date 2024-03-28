// function isPalindrome(str) {
//     str = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, "")
//     let isPalindrome = true
//     for(let i =0; i< str.length; i++){
//         if(str[i]!= str[str.length-i-1]){
//             isPalindrome = false
//         }
//     }
    
//     return isPalindrome
// }

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "") // remove any non-alphanumeric characters from the string.
    let reversedStr = str.split('').reverse().join('') // reverse the string

    return str === reversedStr
}


module.exports = isPalindrome;
