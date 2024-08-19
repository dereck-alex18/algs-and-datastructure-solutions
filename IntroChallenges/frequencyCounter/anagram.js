//Slower solution. Big O (N^2).
function isAnagramSlower(str1, str2){
    if(str1.length !== str2.length)
        return false;
    for(let char of str2){
        const index = str1.indexOf(char);
        if(index === -1)
            return false;
        str1 = str1.replace(char, '');
    }
    return true;
}

console.log(isAnagramSlower('qwerty', 'wertyq'));

//Faster Solution. Big O(N).
function isAnagramFaster(str1, str2){
    if(str1.length !== str2.length)
        return false;

    const str1Frequency = {};
    const str2Frequency = {};

    for(let char of str1){
        str1Frequency[char] = (str1Frequency[char] || 0) + 1;
    }

    for(let char of str2){
        str2Frequency[char] = (str2Frequency[char] || 0) + 1;
    }
    
    for(key in str2Frequency){
        if(!str1Frequency[key])
            return false;
        if(str1Frequency[key] !== str2Frequency[key])
            return false;
    }

    return true;
}

console.log(isAnagramFaster('cinema', 'iceman'));