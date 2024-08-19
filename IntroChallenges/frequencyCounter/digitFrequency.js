function frequencyDigits(num1, num2){
    const strNum1 = String(num1);
    const strNum2 = String(num2);
    const frequencyNum1 = {};
    const frequencyNum2 = {}

    if(strNum1.length !== strNum2.length)
        return false;

    for(let digit of strNum1){
        frequencyNum1[digit] = (frequencyNum1[digit] || 0) + 1;
    }

    for(let digit of strNum2){
        frequencyNum2[digit] = (frequencyNum2[digit] || 0) + 1;
    }
    
    for(let key in frequencyNum2){
        if(!frequencyNum1[key])
            return false;

        if(frequencyNum1[key] !== frequencyNum2[key])
            return false;
    }

    return true;
}

console.log(frequencyDigits(12233, 13322));