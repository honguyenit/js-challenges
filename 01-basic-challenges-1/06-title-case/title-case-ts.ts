function titleCase(str: string){
    let words = str.toLowerCase().split(' ')
    for(let i =0; i< words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    return words.join(' ')
}

console.log(titleCase("hello wORLd"))
console.log(titleCase("the quick brown fox"))
