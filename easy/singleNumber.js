 
 const singleNumber = (nums) =>{
    let occurences = {};
    for(let num of nums){
        occurences[num] ? occurences[num]++ : occurences[num] = 1;
    }
    for(let key in occurences){
        if(occurences[key] === 1){
            return key;
        }
    }
 }
 console.log(singleNumber([2,2,4,4,5]))






let i = 12;




