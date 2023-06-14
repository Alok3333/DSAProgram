// let arr = [10, 14, 2, 11, 6]

// let n = arr.length;

// for(let i = 0; i < n; i++){
//     for(let j = 0; j < n - i - 1; j++){
//         if(arr[j] > arr[j + 1]){
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log(arr)

/* let nums = [3, 1, 5, 4, 2]; */
/* let nums = [5, 4, 3, 2, 1]; */
let nums = [1, 2, 3, 4, 5];

for(let i = 0; i < nums.length; i++){
let swaped = true;
	for(let j = 1; j < nums.length-i; j++){
    if(nums[j] < nums[j - 1]){
      let tmp = nums[j];
      nums[j] = nums[j - 1];
      nums[j - 1] = tmp;
      swaped = false;
    }
    
    if(!swaped){
    	break;
    }
  }
}

console.log(nums)