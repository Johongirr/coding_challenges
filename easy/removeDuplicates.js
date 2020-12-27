 

const removeDuplicates = (nums) =>{
 for(let i = 0; i < nums.length; i++){
    let left = 0;
    let right = 1;
    for(let j = 0; j < nums.length; j++){
        if(nums[left] === nums[right]){
            nums.splice(right, 1);
        } else {
            left++
            right++;
        }
       
    }
 }
  return nums.length;
}
console.log(removeDuplicates([1]))
 
 