/* 
    The problem consists in finding the max sum of a sub array. The size of the sub array is passed
    as parameter along with the array.

    Inputs:
    ([4, 1, -2, 5, 7], 2)
    ([8, 1, 2, 10, -5, 0, -2, 4], 4)
    ([2, 3, 4], 4)

    Outputs:
    { maxSum: 12, subArray: [5, 7] }
    { maxSum: 21, subArray: [8, 1, 2, 10] }
    null 
*/


function getTheMaxSumOfArr(arr, num){
    if(num > arr.length) return null;

    let tempSum = 0
    let maxSum = 0;
    let endWindow = num - 1;
  

    for(let i = 0; i < num; i++){
        tempSum += arr[i];
    }

    maxSum = tempSum;

    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        if(tempSum > maxSum) {
            maxSum = tempSum;
            endWindow = i;
        }
        
    }  

    //Another approach of slicing the array
    //const subArray =[];
    // for(let i = endWindow - num + 1; i <= endWindow; i++){
    //     subArray.push(arr[i]);
    // }
    
    return { maxSum, subArray: arr.slice(endWindow - num + 1, endWindow + 1) };
}


console.log(getTheMaxSumOfArr([-3, -1, 9, 5, 0, 10, 2], 4));
console.log(getTheMaxSumOfArr([10, -5, 2, 2, 4, -1, 8], 3));
console.log(getTheMaxSumOfArr([8, 1, 2, 10, -5, 0, -2, 4], 4));
console.log(getTheMaxSumOfArr([1, 2], 4));
console.log(getTheMaxSumOfArr([-8, 1, -2, 8, 3, 6, 5, -1, 10, 7, 2], 5));
