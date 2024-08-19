function fat(n){
    if(n <= 1){
        return 1;
    }
    return n * fat(n - 1);
}

// A shorter approach
// function fat(n){
//    return n === 1 ? 1 : n * fat(n - 1);
// }


// An even shorter approach
// const fat = n => n === 1 ? 1 : n * fat(n - 1);

console.log(fat(4));