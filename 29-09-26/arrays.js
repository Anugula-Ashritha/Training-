let arr =[NaN,null,undefined,"123",true];
console.log(arr["0"]);
console.log(arr["length"]);
console.log(arr[3]);
console.log(arr.length);
//Destructuring an array 
let r=[1,2,3,4,5,6,7,8,9];
// let [a,b]=r;
// console.log("sum=",a+b);
//rest operator
let [a,b,...d]=r;
console.log(d);
