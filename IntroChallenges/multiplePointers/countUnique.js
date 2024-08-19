/*
    The problem consists in counting only the unique elements in the array.

    Inputs:
    [-1, -1, 1, 2]
    [-5, -3, -3, -3, 1, 1, 2, 3]
    []

    Outputs:
    3
    5
    0
*/


function countUnique(arr){
    //I need two pointers to track the value of the array
    if(arr.length === 0)
        return 0;
    if(arr.length === 1){
        return 1;
    }

    let behind = 0;
    let ahead = 1;
    let count = 1

    while(ahead < arr.length){
        if(arr[behind] !== arr[ahead]){
            count++;
            ahead++;
            behind = ahead - 1;
        } else{
            ahead++;
        }
            
    }
    return count;
}


//Another approach
function countUniqueSol2(arr){
    if(arr.length === 0){
        return 0;
    }

    let i = 0;

    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}


console.log(countUnique([-2, -1, -1, 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUnique([]));
console.log(countUnique([-2, -1, -1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 7, 7, 8, 8, 9]));


console.log(countUniqueSol2([-2, -2, -2, 1, 1, 2, 3]));

