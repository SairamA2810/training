// function sumOfNumber3(array){
//      let res=0
//      for(let v of array){
//          res=res+v
// }
//      return res
// }
// arrat=[1,2,3]
// console.log(sumOfNumber3([1,2,3]))
let arr=[10,20,30,40]
let res=arr.map(v=>{
    if (v<20){
        return v+10
    }
    else{
        return v+30
    }
})
console.log(res)
//error handling
// try{
// console.log(arr1)
// }
// catch(err){
//     console.log(err)
// }

//copy data
//primitive data
let a=10
let b=a
console.log(a,b)
a=20
console.log(a,b)

//objects copy 
let testObj={
    a:20,
    b:50
}
let copyObj=testObj
console.log(`original: ${testObj.a} and copy is ${copyObj.a}`)
testObj.a=120
console.log(`original: ${testObj.a} and copy is ${copyObj.a}`)

// Assignment operator is not formed copy successfully 
// then we need to use spread operator {... <object ref>}
let copy={...testObj}
testObj.a=200
console.log(`original: ${testObj.a} and copy is ${copy.a}`)


let emp={
    id:1,
    name:"sairam",
    skills:['python','ai'],
    address:{
        city:"chennai",
        pin:561276
    }
}
//to copy this nested type objects we use deep copy technique
let copyemp=structuredClone(emp)
emp.id=2
console.log(`original:${emp} and copy:${copyemp}`)
console.log(emp)
console.log(copyemp)

let arr3=['Python','ml','nlp']
// let res3=JSON.parse('arr3')
// console.log(res3,arr3)





// let n='ram'
// var s='m'
// const c=20
function add(){
    j=50;
    let n='sai'
    var s='nik'
    const c=10
   


}
add()
console.log(j)