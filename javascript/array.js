// let arr=[
//     {id:1,price:100,author:'sai'},
//     {id:2,price:20,author:'ram'}
// ]
// // let remove=arr.shift()
// // console.log(remove)
// // console.log(arr)
// let res=arr.findIndex(auth=>{
//     return auth.author==='ram'
// })
// // console.log(res)
// let d=new Date('2024-05-12 23:00')
// console.log(d)
// let week=['sunday','monday','tuesday','wednesday','Thursday','Friday','Saturday']
// console.log(d.getDay(),week[d.getDay()],d.getDate(),'time:',d.getHours());

// let name='sairam'
// let k=name.split('')
// console.log(k);


//sum of the numbers 
function sumOfNumbers(...numbers){
    let sum=0;
    for(let i of numbers){
        sum+=1;
    }
    return sum;

}

console.log(sumOfNumbers(1,2,3,4,5));

// to find small element in given n number of aurguments

function findSmallElement(...arr){
    let smallElement=arr.reduce((min, current) => {
  return current<min ? current:min;
})
return smallElement;
}
console.log(findSmallElement(2,1,4,5,0,9));


function findSalary(...empObjs){
    let salaries=[]
    for(let empObj of empObjs){
        for(let i in empObj){
            if(i==="basic"){
                let hra=empObj[i]*0.15;
                let da=empObj[i]*0.1;
                let salary=empObj[i]+hra+da;
                salaries.push(salary)
            }
        }
    }
    return salaries;
}

function findSalariesOfEmpObjs(...empObjs){
    let salaries1=[];
    for(let empObj of empObjs){
        let hra=empObj["basic"]*0.15;
        let da=empObj["basic"]*0.1;
        let salary=empObj["basic"]+hra+da;
        salaries1.push(salary)
    //    return empObj.basic
        // console.log(hra)
    }
    return salaries1.reduce((acc,e)=>acc+e);
}
let emp1={
    "eno":1,
    "name":"ram",
    "basic":1000,
    
}
let emp2={
    "eno":1,
    "name":"ram",
    "basic":2000
}
console.log(findSalary(emp1,emp2));
console.log(findSalariesOfEmpObjs(emp1,emp2))