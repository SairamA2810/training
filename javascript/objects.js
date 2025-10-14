//Advanced operations on objects
let testObj={
    a:10,
    b:20
}
 let r1=Object.keys(testObj) //to get keys
 console.log(r1)

 //to get values
 let r2=Object.values(testObj)
 console.log(r2)

 //Freeze method is used to restrict the object by manipulating
Object.freeze(testObj)
testObj.a=120
console.log(testObj)