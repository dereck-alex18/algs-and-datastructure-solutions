/*
   The problem consists in receiving one array and getting the longest substring without repeated chars.

   Inputs:
   'rithmschool'
   'bbbb'
   'longestsubstring'

   Outputs:
   7
   1
   8

*/ 


function findLongestSubstring(str){
   const repeated = {};
   let start = longgest = 0;

   for(let i = 0; i < str.length; i++){
    const char = str[i];
    if(repeated[char]){
      start = Math.max(start, repeated[char]);
    }

    longgest = Math.max(longgest, i - start + 1);
    repeated[char] = i + 1;
     
   }

   return longgest;
}

console.log(findLongestSubstring('thisisawesome')); // 6
