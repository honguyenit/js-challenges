// function titleCase(str) {
//     let titleString = ''
//     let arr = str.split(' ')
//     for(let i=0; i < arr.length; i++){
//         let currentWord = arr[i]
//         for(let j = 0; j < currentWord.length; j++){
//             if(j==0){
//                 titleString += currentWord[j].toUpperCase()
//             } else{
//                 titleString += currentWord[j].toLowerCase()
//             }
//         }

//         titleString += ' '
//     }
//     return titleString
// }

// function titleCase(str) {
//     let words = str.toLowerCase().split(' ')
//     for(let i=0; i < words.length; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1)
//     }
    
//     return words.join(' ')
// }

function titleCase(str) {
    let words = str.toLowerCase().split(' ')
    for(let i=0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    
    return words.join(' ')
}

// function titleCase(str){
//     return str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase())
// }

module.exports = titleCase;
