/*
    The problem consists in finding the square values of one array in another array.
    The values of the second array must be the square values of the first array.
    The frequency matter, if there is 2 value of "3" there should be 2 "9s" in the other array

    Inputs:
    arr1 = [1, 2, 4]; arr2 = [1, 4, 16]
    arr1 = [3, 6]; arr2 = [36]
    arr1 = [2, 3, 5, 5]; arr2 = [25, 9, 4, 1]
    arr1 = [3, 4, 3, 5]; arr2 = [16, 25, 9, 9]

    Outputs:
    true
    false
    false
    true

*/



//Slower way of solving the problem. Big O(N^2).
function checkSquaresSlower(arr1, arr2){
    if(arr1.length !== arr2.length) 
        return false;
    
    for(let item of arr1){
      const index = arr2.indexOf(item * item);
     
      if(index === -1) return false;
      arr2.splice(index, 1);
      
    }
    return true;
  }
  
  console.log(checkSquaresSlower([1, 2, 1, 5, 4], [25, 1, 4, 1, 16]));


//Faster way to solve the problem. Big O(N).
function checkSquaresFaster(arr1, arr2){
    if(arr1.length !== arr2.length)
        return false;
    
    const frequencyCounterArr1 = {};
    const frequencyCounterArr2 = {};

    for(let item of arr1){
        frequencyCounterArr1[item] = (frequencyCounterArr1[item] || 0) + 1; 
    }

    for(let item of arr2){
        frequencyCounterArr2[item] = (frequencyCounterArr2[item] || 0) + 1; 
    }
    
    for(let key in frequencyCounterArr1){
        if(!((key ** 2) in frequencyCounterArr2))
            return false;
        if(frequencyCounterArr1[key] !== frequencyCounterArr2[key **2])
            return false;
    }
    return true;
}

console.log(checkSquaresFaster([4, 1, 2, 1, 5, 4, 2], [25, 1, 4, 4, 1, 16, 16]));