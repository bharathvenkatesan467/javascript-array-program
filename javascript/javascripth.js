// 1.implementing a queue with arrays

let ar1=[1,4,3,4,5,9];
console.log("1.Implementing an queue with array")
console.log("The given array:"+ar1);
let num1=prompt("enter the element to insert:")
function inn(num1){
    ar1.push(num1);
}
inn(num1);
console.log("Inserting an element: "+ar1);
function out(){
    ar1.shift();
}
out();
console.log("removing ana element: "+ar1);

// 2. implementing a stack in array

let ar2=[9,7,6,4,9,7];
console.log("1.Implementing an queue with array")
console.log("The given array:"+ar2);
let num2=prompt("enter the element to insert:")
function inn1(num2){
    ar2.push(num2);
}
inn1(num2);
console.log("Inserting an element: "+ar2);
function out1(){
    ar2.pop();
}
out1();
console.log("removing ana element: "+ar2);

// 3.Checking array elements

let ar3=[9,5,7,5,2,6];
let num3=9;
console.log("3.Checking array elements")
let res=ar3.includes(num3);
if(res==true)
{
    console.log("The given element is present in array");
}
else{
    console.log("The given element is not present in array");
}

// 4.flatteninh an array

let ar4=[[1,2],[3,4],[5,6]];
let f=ar4.flat();
console.log(f);

// 5.filter in array

let ar5=[2,3,4,5,6];
let fil=ar5.filter(x => x>4);
console.log(fil);

// 6.split and join in array

let str1="hi how are you";
console.log("6.split and join");
console.log("string :"+str1);
let s=str1.split(" ");
console.log("split : "+s);
let str2=["apple","orangre","mango"];
console.log(str2);
let j=str2.join();
console.log("join : "+j);
