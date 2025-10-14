// create an array 3 employee objects with eno,name,salary and address properties
//iterate that array and display the details of 3 mplys in console

class Employee{
    constructor(public eno:number,public name:string,public salary:number,public address:Address){
    }
    public displayDetails():void{
        console.log(`{${this.eno}, ${this.name}, ${this.salary}, ${this.address.city},${this.address.pincode}}`)
    }
}
class Address{
    constructor(public city:string,public pincode:number){}
}

let employees:Employee[]=[
  new Employee(101, "Alice Johnson", 75000, new Address( "New York", 10001)),
  new Employee(102, "Bob Williams", 82000, new Address( "Los Angeles", 90012)),
  new Employee(103, "Charlie Brown", 68000, new Address( "Chicago", 60601)),
];

for(let i of employees){
    i.displayDetails();
}

