// function countVowels(str: string){
//     const vowels = 'ueoaiUEOAI'
//     let vowelTotal: number = 0
//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i])){
//             vowelTotal++
//         }
//     }
//     return vowelTotal
// }

function countVowels(str: string){
    const vowels: Set<string> = new Set(['u', 'e', 'o', 'a', 'i'])
    let vowelTotal: number = 0
    for(let i = 0; i < str.length; i++){
        if(vowels.has(str[i].toLocaleLowerCase())){
            vowelTotal++
        }
    }
    return vowelTotal
}

// function countVowels(str: string){
//     let vowelTotal: number = 0
//     for(let i = 0; i < str.length; i++){
//         if(isVowel(str[i])){
//             vowelTotal++
//         }
//     }
//     return vowelTotal
// }

function isVowel(ch: string){
    switch (ch.toLowerCase()) {
        case 'o':
            return true
       case 'u':
            return true
        case 'i':
            return true
        case 'a':
            return true
        case 'e':
            return true
        default:
            return false
    }
}

console.log('Hello World!', countVowels('Hello World!'))