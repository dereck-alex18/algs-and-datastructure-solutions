/* 
    The problem consists in finding the min sum of an array with positive numbers. The sum is passed through parameter
    and is also positive.

    Inputs:
    ([4, 1, -2, 5, 7], 12)
    ([1, 3, 5, 2, 0, 4], 6)
    ([2, 3, 4], 10)

    Outputs:
    2
    2
    0
    null 
*/

//[1, 3, 5, 2, 0, 4], 6
function minSubArrayLength(arr, sum){
   let start = 0;
   let end = 0;
   let total = 0;
   let minLength = Infinity;

   while(start < arr.length){
    
    if(end < arr.length && total < sum){
        total += arr[end];
        end++;
    }
    else if(total >= sum){
        minLength = Math.min(minLength, end - start);
        total -= arr[start];
        start++;
    }
    else{
        break;
    }
   }

   return minLength === Infinity ? 0 : minLength;

}


console.log(minSubArrayLength([10, 1, 5, 1, 5, 10, 9], 15));
console.log(minSubArrayLength([1, 3, 5, 2, 0, 4], 6));
console.log(minSubArrayLength([1,4,16,22,5,7,8,9,10],55));
console.log(minSubArrayLength([1, 2], 4));

