let num = [56,78,90,23,90,76,43,56];
for(i=0;i<num.length;i++){
    for(j=i+1;j<num.length;j++){
        if(num[i]===num[j]){
            console.log("Duplicate No. are :" ,num[i])
        }
    }
}
// Array methods:
let data = ["chrome",true,132.8];
// add the value in the 5th index
data[5] = "webkit";
console.log("Adding element in the 5th index: " ,data);
// removing last element
data.pop();
console.log("After using pop: " ,data);
// adding at the last of the element
data.push("firefox");
console.log("After using push: "  ,data)
// removing 1st element
data.shift();
console.log("After using shift: " ,data);


