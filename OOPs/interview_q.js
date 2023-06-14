var keyList=[{key:'loc',name:'location'},{key:'tel',name:'telephone'}];
var dataList={ loc:['KA','KL'], tel:['+91876543222','+912345676523'], city:['BLR','Delhi'] } 

// step 1 using for of loop
let output = {};

for(let item of keyList){
    output[item.name] = dataList[item.key]
}

console.log(output)


// write a code other way step 2 using forEach method
const output2 = {}; 
keyList.forEach((accumulator, ele) => {
    output2[accumulator.name] = dataList[accumulator.key]
});
console.log(output2)




// output :
// { location:['KA','KL'], telephone:['+91876543222','+912345676523'] }