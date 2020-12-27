const swap = (arr, left, right)=>{
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

const reverseString = (s) =>{
    let left = 0; 
    let right = s.length - 1;
    for(let i = 0; i < s.length; i++){
        if(s[left] && s[right]){
           swap(s, left, right);
            left++;
            right--;
            console.log(s)
        }
        console.log(left, right)
        if(left >= right){
            return s;
        }
    }
    
};

 
console.log(reverseString(["H","a","n", "a","h"]));