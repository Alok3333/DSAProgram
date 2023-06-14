// Find a "pivot" element in the array to compare all other
// elements against and then shift elements before or after
// pivot depending on their values
let arr = [30, 20, 2, 4, 99, 50, 6, 3, 44]

function QuickSort(arr, left, right) {
  let len = arr.length,
      index

  if(len > 1) {

    index = partition(arr, left, right)

    if(left < index - 1) {
      QuickSort(arr, left, index - 1)
    } 

    if(index < right) {
      QuickSort(arr, index, right)
    }

  }

  return arr

}

function partition(arr, left, right) {
  let middle = Math.floor((right + left) / 2),
      pivot = arr[middle],
      i = left,                 // Start pointer at the first item in the array
      j = right                 // Start pointer at the last item in the array

  while(i <= j) {

    // Move left pointer to the right until the value at the
    // left is greater than the pivot value
    while(arr[i] < pivot) {
      i++
    }

    // Move right pointer to the left until the value at the
    // right is less than the pivot value
    while(arr[j] > pivot) {
      j--
    }

    // If the left pointer is less than or equal to the 
    // right pointer, then swap values
    if(i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]  // ES6 destructuring swap
      i++
      j--
    }
  }

  return i

}

QuickSort(arr, left = 0, right = arr.length - 1)

console.log(arr);






// // second quickSort Algorithm

// let arr = [30, 20, 2, 4, 99, 50, 6, 3, 44];

// let start = 0;
// let end = arr.length-1;

// function QuickSort(arr, start, end) {
//     if(start < end){
//         j = patition(arr, start, end)
//         QuickSort(arr, start, j-1);
//         QuickSort(arr, j + 1, end);
//     }
// }

// function patition(arr, start, end){
//     let pivot = arr[start];
//     let i = start;
//     let j = end;
    
//     while(i <= j){
//         do{
//             i++;
//         }while(arr[i] <= pivot);
        
//         do{
//             j--;
//         }while(arr[j] > pivot);
        
//         if(i < j){
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }
//     }
//     [arr[i], arr[j]] = [arr[j], arr[i]]
//     i++;
//     j--;
//     return j;
// }

// QuickSort(arr, start, end)

// console.log(arr);




// // 3rd algorithm of quickSort
// let arr = [9, 1, 6, 3, 5];

// let start = 0;
// let end = arr.length-1;

// function quickSort(arr, start, end) {
//     if(start < end) {
//     i = partition(arr, start, end);
//     quickSort(arr, start, i-1)
//     quickSort(arr, i+1, end)
//     }
// }

// function partition(arr, start, end){
//     let middle = Math.floor((start + end) / 2);
//     // console.log(arr[middle]);
//     pivot = arr[middle],
//     i = start,
//     j = end
    
//     while(i <= j){
//         while(arr[i] < pivot){
//             i++
//         }
//         while(arr[j] > pivot){
//             j--
//         }
//         if(i <= j){
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             i++;
//             j--;
//         }
//     }
//     return i
// }

// quickSort(arr, start, end);

// console.log(arr);


// 4 - Quick sort algorithm ********************************************************

// let arr = [5, 4, 3, 2, 1];

// let start = 0;
// let end = arr.length - 1;

// function quickSort(arr, start, end) {
//   if (start >= end) return;

//   let low = start;
//   let hi = end;
//   let mid = Math.floor(start + (end - start) / 2);
//   let pivot = arr[mid];

//   // also a reason why if it is already sorted it will not swap
//   while (low <= hi) {
//     while (arr[low] < pivot) {
//       low++;
//     }
//     while (arr[hi] > pivot) {
//       hi--;
//     }

//     if (low <= hi) {
//       let swap = arr[low];
//       arr[low] = arr[hi];
//       arr[hi] = swap;
//       low++;
//       hi--;
//     }
//   }

//   //   now my pivot is at correct index, please sort the two halves now
//   quickSort(arr, low, end);
//   quickSort(arr, start, hi);
// }

// quickSort(arr, start, end);
// console.log(arr);