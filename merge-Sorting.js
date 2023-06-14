let arr = [9, 1, 6, 3, 5];
// let arr = [20, 10, 90, 23, 98, 34, 55, 30, 67, 45];

function mergeSort(arr, start, end){
    if(start < end){
        let mid = Math.floor((start + end) / 2);
        // console.log(arr[mid])
        mergeSort(arr, start, mid);
        mergeSort(arr, mid+1, end);
        merge(arr, start, mid, end);
    }
}

function merge(arr, start, mid, end){
    let tmp = [];
    i = start,
    j = mid+1,
    k = start
    
    while(i <= mid && j <= end){
        if(arr[i] <= arr[j]){
            tmp[k] = arr[i]
            k++;
            i++;
        }
        else {
            tmp[k] = arr[j]
            k++;
            j++;
        }
    }
    
    while(i <= mid){
        tmp[k] = arr[i]
        k++;
        i++;
    }
    
    while(j <= end){
        tmp[k] = arr[j]
        k++;
        j++;
    }
    
    for(i = start; i <= end; i++){
        // console.log(tmp[i])
        arr[i] = tmp[i]
    }
}

mergeSort(arr, 0, arr.length-1);
console.log(arr)

