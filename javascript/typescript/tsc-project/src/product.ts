class Product{
    constructor(public productID:number,public productName:string,public productPrice:number){}
    public getDiscountPrice(discountPercentage:number){
        return `discount price is ${this.productPrice*(discountPercentage/100)}`
    }
}
let p1=new Product(1,'Laptop',100000)
console.log(p1.getDiscountPrice(25))