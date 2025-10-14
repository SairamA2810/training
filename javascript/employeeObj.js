import Employee from './employee.js'
let e1=new Employee()
console.log(e1.display())
console.log(e1.a)

//destructuring
let arr=[1,2,3]
let [a,b,c]=arr
let obj1={
    pid:1,
    name:"sai"
}
let {pid,name}=obj1
console.log(a,b,c,pid,name)