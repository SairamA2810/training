let testArr=[20,10,200,300,250,60]
let r=testArr.filter((v)=> v>10 && v<80)
console.log(r)


//Add 10 if the element is less than 20 and add 30 if the elements are >20
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
//other version
let res1=arr.map(v=>v>20?v+30:v+10)
console.log(res1)

//search
let r1=arr.find(v=> v==30)
console.log(r1)
console.log(arr.findIndex(v=> v==20 ))

//to find index
let r2=arr.findIndex(v=> v==20)
console.log(r2)

//reduce method
//syntax reduce(acc,ele)
let r3=arr.reduce((a,v)=>a+v)
console.log(r3)

//sort method
let r4=arr.sort((v1,v2)=>v1>v2?1:v1<v2?-1:0)
console.log(r4)

//reverse
let r5=arr.reverse()
console.log(r5)

//find small and big element using reduce function
//small
console.log(arr)
let r6=arr.reduce((s1,v)=>{
    if (s1>v){
    return v
}
else{
    return s1
}
})
console.log(r6)
//big
let arr1=[10,20,60,40]
let r7=arr1.reduce((big,val)=>{
    if (big>val){
        return big
    }
    else{
        return val
    }
})
console.log(`Biggest Number in Array: ${arr1} is ${r7}`)

//shorthand use
let r8=arr1.reduce((big,val)=>big>val?big:val)
console.log(r8)