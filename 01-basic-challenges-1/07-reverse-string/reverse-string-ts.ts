// function reverseString(str: string){
//     return str.split('').reverse().join('')
// }

function reverseString(str: string){
    let strRevert: string = ''
    for(let i = str.length - 1; i >= 0; i--){
        strRevert += str[i]
    }
    return strRevert
}


console.log(reverseString('hello World!'))