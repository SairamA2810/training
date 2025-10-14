let a=10
console.log(a)
// let Student:Object={
//     stdNo:1,
//     stdName:"sairam",
//     stdAddress:{
//         city:"chennai",
//         pin:52626
//     }
type Student1={
    sNo:number,
    name:string,
    Address:{
        city:string,
        pincode:number
    }
}
let s1:Student1={
    sNo:2,
    name:"sai",
    Address:{
        city:"ap",
        pincode:90
    }
}
console.log(s1)

let id:string | number | boolean;
id=10
id="sairam"
id=true
console.log(id)

type Job={
    name:String,
    age:number
}
type Company={
    cname:string,
    salary:number,
    place:string
}
type Employee=Job & Company
let e1:Employee={
    name:"Sairam",
    age:22,
    cname:"CTS",
    salary:30000,
    place:"chennai"
}
console.log(e1)


//functions
function test(a:()=>void){
    a()
}
test(()=>{
    console.log("hello")
})


//tradition version
// in this we need to declare instance variables and we need to intialize them
class Student9{
    name;
    age;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getDetail(){
        return [this.name,this.age]
    }
}
let p=new Student9("saoi",22)
console.log(p)
// to over come the above problem we will use typescript declartion,installation will take in one one line unlike traditional 4 lines.
// class Person{
//     constructor(public name:string,private age:number){
//         private this.company:string="cts"
//     }
//     getDetails(){
//         return [this.name,this.age]
//     }
// }
// let p2=new Person('sai',20);
// console.log(p2)