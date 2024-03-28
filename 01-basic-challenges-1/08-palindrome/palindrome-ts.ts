// function isPalindrome(str: string) {
//     str = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, "")
//     let isPalindrome = true
//     for(let i =0; i< str.length; i++){
//         if(str[i]!= str[str.length-i-1]){
//             isPalindrome = false
//         }
//     }
    
//     return isPalindrome
// }

function isPalindrome(str: string) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    let reversedStr = str.split('').reverse().join('')

    return str === reversedStr
}


console.log('Civic:' + isPalindrome('Civic'))
console.log('Noon:' + isPalindrome('Noon'))
console.log('Racecar:' + isPalindrome('Racecar'))
console.log('Hello:' + isPalindrome('Hello'))
console.log('A man, a plan, a canal, Panama:' + isPalindrome('A man, a plan, a canal, Panama'))

// 0 1 2 3 4 5
// r e f e r
// n o o n