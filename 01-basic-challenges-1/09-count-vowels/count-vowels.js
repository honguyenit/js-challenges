function countVowels(str){
    const vowels = 'ueoai'
    let vowelTotal = 0
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            vowelTotal++
        }
    }
    return vowelTotal
}

// function countVowels(str){
//     const vowels = new Set(['u', 'e', 'o', 'a', 'i'])
//     let vowelTotal = 0
//     for(let i = 0; i < str.length; i++){
//         if(vowels.has(str[i].toLocaleLowerCase())){
//             vowelTotal++
//         }
//     }
//     return vowelTotal
// }

// function countVowels(str){
//     let vowelTotal = 0
//     for(let i = 0; i < str.length; i++){
//         if(isVowel(str[i])){
//             vowelTotal++
//         }
//     }
//     return vowelTotal
// }

// function isVowel(ch){
//     switch (ch.toLowerCase()) {
//         case 'o':
//             return true
//        case 'u':
//             return true
//         case 'i':
//             return true
//         case 'a':
//             return true
//         case 'e':
//             return true
//         default:
//             return false
//     }
// }

module.exports = countVowels;
