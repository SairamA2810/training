//creating class and objects
//create class
class Student{
    //ctreating constructor
    constructor(id,name,place){
        this.id=id,
        this.Name=name,
        this.Place=place
    }
}
let s1=new Student(1,'sai','chennai')
console.log(s1)

//class product class with productID productName  MRP
//write a method which can return the discount price 
//taking discount percentage as aurgument
//create two products and get their discount price for 15% and 35%

class Product{
    constructor(id,name,mrp){
        this.ProductID=id,
        this.ProductName=name,
        this.MRP=mrp;
    }
    discount(dvalue){
        this.value=this.MRP*(dvalue/100)
        this.res=this.MRP-this.value
        return this.res
    }
}
let p1=new Product(1,'Mobile',10000);
console.log(`After applying discount price is ${p1.discount(20)}`)