function vowelCounter(str){
    const vowelObj = {
      'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0
    };
    
    const consonantObj = {};
    
    for(let char of str){
      if(char in vowelObj){
        vowelObj[char] += 1;
      } else{
        consonantObj[char] = (consonantObj[char] || 0) + 1;
      }
    }
    
    return [vowelObj, consonantObj];
  }
  
  console.log(vowelCounter('this is a test for you'));