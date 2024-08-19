function vowelCounter(str){
    const vowels = {};
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    for(let i = 0; i < str.length; i++){
        const currentChar = str[i];
        if(vowels[currentChar] > 0){
            vowels[currentChar]++;
        } else {
            vowels[currentChar] = 1;
        }        
    }
        
    return vowels;
}

console.log(vowelCounter("Hello World 1233! @#$% +; |-_"));