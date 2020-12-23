 
 
const invalidArg = (nums, target)=>{
    if(!nums || !target || !Array.isArray(nums) || typeof target !== 'number'){
        return true;
    } 
}
 
const twoSum = function(nums, target) {
    if(invalidArg(nums, target)) return 'Please provide only 2 args 1st one arr of ints and 2nd is positive integer'
    const  map = new Map();
    for(let i=0; i < nums.length; i++){
       if(map.get(nums[i]) >= 0){
           return [map.get(nums[i]), i];
       }
       const key = target - nums[i];
       map.set(key, i);
    }
}
console.log(twoSum([3,2,4,10,5,3], 8)); // [0, 4]

 