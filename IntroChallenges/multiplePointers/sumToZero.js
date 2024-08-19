/*
    The problem consists in finding the first pair of numbers in an array that the sum is 0.

    Inputs:
    [-1, 0, 1, 2]
    [-5, -3, -2, 0, 2]
    [-3, -1, 0, 4]

    Outputs:
    [-1, 1]
    [-2, 2]
    []
*/


//Slower solution. Big O(N^2).
function sumToZeroSlower(arr){
    //I need 2 fors to loop through the array
    //One for will hold one position and the other will move through the rest of the array
    //each interaction will sum the 2 values and check if it's zero. If so, return the pair

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            const sum = arr[i] + arr[j];
            
            if(sum === 0)
                return [arr[i], arr[j]];
        }
    }
    return [];
}

console.log(sumToZeroSlower([-3, -2, 0, 1, 3]));


function sumToZeroFaster(arr){
    //I need two pointers to track the array.
    //One pointer will start in the beginning and the other in the end of the array.
    //Sum up the item of item pointer.
    //If it's zero, return the pair. 
    //If it's less than zero, increment the left pointer. 
    //If it's greater than zero, decrement the right pointer.

    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        const sum = arr[left] + arr[right];

        if(sum === 0)
            return [arr[left], arr[right]];
        else if(sum > 0)
            right--;
        else
            left++;
    }
    return [];
}

console.log(sumToZeroFaster([-5, -2, 0, 1, 2, 3, 6]));