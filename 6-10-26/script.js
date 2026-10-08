console.log(1);
//filter & map function
let r=[1,12,3,4,5,,6,15,80];
let f=r.filter((val)=>{
    return val %5 ==0;
}
)
console.log(f);
//reduce
arr=[1,3,4,3,5];
let q=r.reduce((prevval,val,ind,arr)=>{
 return prevval+val;
})
let a=r.reduce((prevval,val,ind,arr)=>{
 return prevval;
},1000);
console.log(q);
console.log(a);

//Asynchronous Javascript
console.log(1);
// alert("This is an alert");
setTimeout(()=>{
    console.log(2);
    
},5000); //5000 milliseconds = 5 seconds
setTimeout(()=>{
    console.log(3);
    
},0); 

//Even if we take 0 milliseconds ,due to event loop [it takes time for callback function to execute] so it will internally take some time to execute the callback function and it will be executed after the synchronous code is executed. So, it will be executed after console.log(4) is executed.
// console.log(2);
console.log(4);

//O/P :1 3 2 -->Asynchronous Javascript

//Converting an Asynchronous function to a Synchronous function 

a=[1,4,5,6,7,8,9];
se
