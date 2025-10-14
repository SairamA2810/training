// console.log("Hello World!");  used to print hello world
let a=10
console.log(a)
console.log(typeof a)
a='Sairam'
console.log(typeof a);
a=10.5
console.log(typeof a)

// by using template literal
let empName="Sairam"
console.log(`Employee Name is ${empName}`)
let d,b,c;
d=10
b=20
c=30
console.log(`a value is ${d} b value is ${b} c value is ${c}`)


let name=['sai','ram']
let details={
    name:'sai',
    no:10
}
console.log(typeof name)
console.log(typeof details)

let x=100
let y="100"
console.log(x==y)
console.log(x===y)

console.log(x>=100 && y==='1100') //Here two conditons should be true
console.log(x>=100 || y==='1100')  //Here oen of the condition should be true


// Find the salary of the employye when basic is 30000
// salary=basic+(hra(10% of basic ))+da(15% of basic)

let basic=30000;
let hra=basic*(10/100)
let da=basic*(15/100)
let salary=basic+hra+da
console.log(salary)

//Functions
//Declare in two ways by using function and def keywords
function sumOfNumbers(num1,num2){
    let sum=num1+num2
    return sum

}
num1=10
num2=20
let result=sumOfNumbers(num1,num2)
console.log(result)

//other method
console.log(sumOfNumbers(10,20))

//Anonymous function
let fun=function(num1,num2){
    return num1+num2
}
console.log(fun(20,20))

//arrow function
let findSum3=(num1,num2)=>num1+num2
console.log(findSum3(30,40))

//write a function to return big number by using 3 methodsn of functions
//basic method using function keywors=d
function bigNumber(number1,number2){
    if(number1>number2){
        return number1
    }
    else if(number1<number2){
        return number2
    }
    else{
        return number1
    }
}
console.log(bigNumber(39,49))

//by using arrow function
let findBigNumber=(number1,number2)=>{
    if(number1>number2){
        return number1
    }
    else if(number1<number2){
        return number2
    }
    else{
        return number1
    }
}
console.log(findBigNumber(4,5))

let findBigNumber1=(num1,num2)=>a===b? 'equal ':a>b?a:b;
console.log(findBigNumber1(60,40))

//write a function that receives an array of elements as arguments and return their sum

function sumOfNumber3(array){
     let res=0
     for(let v of array){
         res=res+v
}
     return res
}
arrat=[1,2,3]
console.log(sumOfNumber3([1,2,3]))

//write a function to receive three arugmemnts and return the big one
//write a function that recieves a number aurgument and return prime or not
//write a function that recieves a number aurgument and return it's factors
//write a program that a recieves a number aurgument and returm it's prime factorial 

//Array Operations
//inserting
let testArr=[10,20,30]

//insert at begin uses unshift method
testArr.unshift(9)
console.log(testArr)

//insert at end uses push method
testArr.push(31)
console.log(testArr)

//insert in-between using slice method
//syntax .slice(index,no.of elements to del,new element)
testArr.splice(3,0,100)
console.log(testArr)

//deleting
//start
testArr.shift()
console.log(testArr)

//end
testArr.pop()
console.log(testArr)

//in between
testArr.splice(2,1)
console.log(testArr)

//updating
testArr.splice(1,1,40)
console.log(testArr)

// Object Operations
let person={
    id:123,
    name:"sairam",
    age:21,
    city:'chennai'
}
console.log(person)
for (v in person){
    console.log(`${v} is ${person[v]}`)
    console.log(person[v])
}

//object manipulation
test={
    a:10,
    b:20
}
console.log(test)
test.c=20 //adding new property
console.log(test)
test.a=20 //modifying value or updating value of a
console.log(test)

delete test.a //deleting value along with key or property
console.log(test)
