let arr = [2, 3, 6, 8, 10];

let start = 0;
let end = arr.length-1;
let find = 10;
let indexNumber = undefined;

function binarySearch(data) {
    let midEle = Math.floor((start + end) / 2);
    // console.log(midEle)
    if(start <= end && data[midEle] != find){
        if(find < data[midEle]){
            end = midEle - 1;
        }
        else {
            start = midEle + 1;
        }
        binarySearch(data)
    }
    
    if(data[midEle] == find){
        indexNumber = midEle
    }
}

binarySearch(arr);

console.log(indexNumber)
