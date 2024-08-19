/*
    This problem consists in checking if all the chars of one string is in the other.
    There might be another chars in between. However, the order matters.
    
    Inputs:
    ('hey', 'hey there')
    ('hey', 'yeah')
    ('chip', 'completing all the tasks in time is a huge problem')
    ('abc', 'a')

    Outputs
    True,
    False,
    True, 
    False
*/ 

function isSubsequence(str1, str2) {
    if(str1.length > str2.length)
      return false;
    let i = 0;
    let temp = '';
    
    for(let j = 0; j < str2.length; j++){
        if(str1[i] === str2[j]){
        i++;
        temp += str2[j]
      }  
    }
    
    return str1 === temp;
    
  }
  
   console.log(isSubsequence('hello', 'hello world')); // true
   console.log(isSubsequence('sing', 'sting')); // true
   console.log(isSubsequence('abc', 'abracadabra')); // true
   console.log(isSubsequence('abc', 'acb')); // false (order matters)
   console.log(isSubsequence('hey', 'howdy')); //false
   console.log(isSubsequence('dereck', 'these detection are cool kicking')); //true
   console.log(isSubsequence('abc', 'abc')); //true
   console.log(isSubsequence('hi', 'h')); //false
