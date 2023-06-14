let arr = [2,4,6,3,1,5,7]
let n = arr.length;
let x = 7;
let findIndex = undefined;

for(i = 0; i < n; i++){
    if(arr[i] == x){
        findIndex = i
    }
    else {
        i = i + 1;
    }
}


console.log(findIndex)
