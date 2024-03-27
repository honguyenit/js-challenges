function reverseString(str) {
    return str.split('').reverse().join('')
}

// function reverseString(str){
//     let strRevert = ''
//     for(let i = str.length -1; i >= 0; i--){
//         strRevert += str[i]
//     }

//     return strRevert
// }

module.exports = reverseString;
