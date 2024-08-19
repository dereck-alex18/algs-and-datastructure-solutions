function areThereDuplicates() {
    const argsFrequency = {}
    
    for(let value of arguments){
      argsFrequency[value] = (argsFrequency[value] || 0) + 1;
      if(argsFrequency[value] > 1)
        return true;
    }
    
    return false;
  }
  
  console.log(areThereDuplicates(1, 5, 3, 4, 0, 8))
  console.log(areThereDuplicates('a', 'b', 'c', 'd', 'a'))